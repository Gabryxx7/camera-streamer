from flask import Flask, render_template, session, copy_current_request_context, send_from_directory, request
from flask_socketio import SocketIO, emit, disconnect, join_room, leave_room, close_room, rooms, disconnect
from flask_cors import CORS, cross_origin
close_room, rooms, disconnect
from threading import Lock
import os
import cv2
import io
import imutils
import base64
from io import StringIO, BytesIO
from PIL import Image
import numpy as np

ROOM = 'room'
async_mode = 'eventlet'
app = Flask(__name__, template_folder=os.path.abspath('../clients'), static_folder=os.path.abspath('../clients'))
CORS(app,resources={r"/*":{"origins":"*"}})
app.config['CORS_HEADERS'] = 'Content-Type'

app.config.update(
  DEBUG=True,
  SECRET_KEY='You_will_never_know_:)'
)
# socketio = SocketIO(app, async_mode=async_mode)
socketio = SocketIO(app, pingTimeout=900, cors_allowed_origins='*', async_mode=async_mode)
socketio.init_app(app, cors_allowed_origins="*")
thread = None
thread_lock = Lock()

connected_particpants = {}

@app.route('/clients')
@cross_origin()
def serve_clients():
    return app.send_static_file('client.html')

@app.route('/streamer')
@cross_origin()
def serve_page():
    return app.send_static_file('streamer.html')

@app.route('/js/<path:path>')
def send_static(path):
    return send_from_directory('../clients/js/', path)

@app.route('/')
@cross_origin()
def serve_stramer():
    return app.send_static_file('streamer.html')


def background_thread():
    """Example of how to send server generated events to clients."""
    count = 0
    while True:
        socketio.sleep(10)
        count += 1
        socketio.emit('my_response',
                      {'data': 'Server generated event', 'count': count})

@socketio.on('close_room')
def on_close_room(message):
    session['receive_count'] = session.get('receive_count', 0) + 1
    emit('my_response', {'data': 'Room ' + message['room'] + ' is closing.',
                         'count': session['receive_count']},
         to=message['room'])
    close_room(message['room'])


@socketio.event
def my_room_event(message):
    session['receive_count'] = session.get('receive_count', 0) + 1
    emit('my_response',
         {'data': message['data'], 'count': session['receive_count']},
         to=message['room'])

@socketio.event
def disconnect_request():
    @copy_current_request_context
    def can_disconnect():
        disconnect()

    session['receive_count'] = session.get('receive_count', 0) + 1
    # for this emit we use a callback function
    # when the callback function is invoked we know that the message has been
    # received and it is safe to disconnect
    emit('my_response',
         {'data': 'Disconnected!', 'count': session['receive_count']},
         callback=can_disconnect)

@socketio.event
def connect():
    print('Client connected', request.sid)

@socketio.on('disconnect')
def test_disconnect():
    print('Client disconnected', request.sid)

@socketio.on('frame', namespace='/streamer')
def user_video(frame):
    socketio.emit('frame', { 'frame': frame['frame'] }, namespace='/client')

@socketio.on('image', namespace='/streamer')
def image(data_image):
    sbuf = StringIO()
    sbuf.write(data_image)

    # decode and convert into image
    b = BytesIO(base64.b64decode(data_image))
    pimg = Image.open(b)

    ## converting RGB to BGR, as opencv standards
    frame = cv2.cvtColor(np.array(pimg), cv2.COLOR_RGB2BGR)

    # Process the image frame
    frame = imutils.resize(frame, width=700)
    frame = cv2.flip(frame, 1)
    imgencode = cv2.imencode('.jpg', frame)[1]

    # base64 encode
    stringData = base64.b64encode(imgencode).decode('utf-8')
    b64_src = 'data:image/jpg;base64,'
    stringData = b64_src + stringData

    # emit the frame back
    socketio.emit('frame', { 'frame': stringData }, namespace='/client')

@socketio.on('connect')
def test_connect():
    emit('ready', {'sid': request.sid}, room=ROOM, skip_sid=sid)

    
@socketio.on('message', namespace='/')
def message(data):
    sid = request.sid    
    peerToSend = None
    if 'sid' in data:
      peerToSend = data['sid']
    data['sid'] = sid
    print(f"Received message from {sid}:{data['type']}")
    socketio.emit('message', data=data, room=peerToSend if peerToSend else ROOM, skip_sid=sid)

@socketio.on('disconnect', namespace='/')
def disconnect():
    sid = request.sid
    print("Received Disconnect message from %s" % sid)
    for room, clients in connected_particpants.items():
        try:
            clients.remove(sid)
            print("Removed %s from %s \n list of left participants is %s" %(sid, room, clients))
        except ValueError:
            print("Remove %s from %s \n list of left participants is %s has failed" %(sid, room, clients))

@socketio.on('create or join', namespace='/')
def create_or_join(data):
    sid = request.sid
    join_room(data)
    try:
        connected_particpants[data].append(sid)
    except KeyError:
        connected_particpants[data] = [sid]
    numClients = len(connected_particpants[data])
    if numClients == 1:
        socketio.emit('created', data)
    elif numClients > 2:
        socketio.emit('full')
    elif numClients == 2:
        socketio.emit('joined')
        socketio.emit('join')
    print (sid, data, len(connected_particpants[data]))


def create_app():
    socketio.run(app, host="0.0.0.0", port=3005, debug=True)

if __name__ == '__main__':
    create_app()