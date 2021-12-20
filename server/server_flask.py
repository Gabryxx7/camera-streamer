from flask import Flask, render_template, Response
from streamer import Streamer

app = Flask(__name__)
full_chain_path =  "/etc/letsencrypt/live/subdomain.domain.com/fullchain.pem"
priv_path =  "/etc/letsencrypt/live/subdomain.domain.com/privkey.pem"

def gen():
  # streamer = Streamer('127.0.0.1', 3006)
  streamer = Streamer('subdomain.domain.com', 3006)
  streamer.start()

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
  app.run(host='0.0.0.0', port=5000, threaded=True, ssl_context=(full_chain_path, priv_path))
