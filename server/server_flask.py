import sys
from flask import Flask, render_template, Response
from streamer import Streamer

if("streaming_config" not in sys.modules):
    import streaming_config as config

app = Flask(__name__)

def gen():
  # streamer = Streamer('127.0.0.1', config.port)
  # streamer = Streamer('0.0.0.0', config.port)
  streamer = Streamer(config.domain, config.port)
  streamer.run()

  while True:
    if streamer.streaming:
      yield (b'--frame\r\n'b'Content-Type: image/jpeg\r\n\r\n' + streamer.get_jpeg() + b'\r\n\r\n')

@app.route('/')
def index():
  return render_template('index.html')

@app.route('/video_feed')
def video_feed():
  return Response(gen(), mimetype='multipart/x-mixed-replace; boundary=frame')

if __name__ == '__main__':
  app.run(host='0.0.0.0', port=5000, threaded=True, ssl_context=(config.full_chain_path, config.priv_path))
