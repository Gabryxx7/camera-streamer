from flask import Flask, render_template, session, copy_current_request_context
from flask_socketio import SocketIO, emit, disconnect
from threading import Lock


async_mode = None
app = Flask(__name__)
app.config['RESULT_STATIC_PATH'] = "client/"
app.config['SECRET_KEY'] = 'secret!'
socket_ = SocketIO(app, async_mode=async_mode)
thread = None
thread_lock = Lock()

@app.route('/client/', defaults={'file': 'streamer.html'})
def serve_results(file):
    # Haven't used the secure way to send files yet
    return send_from_directory(app.config['RESULT_STATIC_PATH'], file)

@app.route('/')
def client_page():
    return render_template('index.html', async_mode=socket_.async_mode)

@socketio.on('frame', namespace='/test')
def user_video(frame):
    feed = frame
    print (str(feed))

@socketio.on('image')
def image(data_image):
    sbuf = StringIO()
    sbuf.write(data_image)

    # decode and convert into image
    b = io.BytesIO(base64.b64decode(data_image))
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
    emit('response_back', stringData)


if __name__ == '__main__':
    socket_.run(app, debug=True)