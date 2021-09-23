# camera-streamer
Careful that the link I sent you (

[https://towardsdatascience.com/video-streaming-in-web-browsers-with-opencv-flask-93a38846fe00](https://towardsdatascience.com/video-streaming-in-web-browsers-with-opencv-flask-93a38846fe00)

) is for the seconf part of the server: Getting frames and sending them to some other page.

For the first part (client streaming video): you need something like this ( [https://medium.com/@alexcambose/webcam-live-streaming-with-websockets-and-base64-64b1b4992db8](https://medium.com/@alexcambose/webcam-live-streaming-with-websockets-and-base64-64b1b4992db8) )

Once you set that up, the python flask server will be storing that data somewhere.And then feed that video stream to another url like this: [https://github.com/NakulLakhotia/Live-Streaming-using-OpenCV-Flask](https://github.com/NakulLakhotia/Live-Streaming-using-OpenCV-Flask)You would only need to change the function `gen_frames()`  to yield the frames from wherever you have stored them (either file or in memory)

Found a similar project on SO: [https://stackoverflow.com/questions/66359505/stream-video-to-flask-app-using-flask-socketio](https://stackoverflow.com/questions/66359505/stream-video-to-flask-app-using-flask-socketio)

This guy has a javascript webapp to stream images and then a Flask python server to retreive it on the socket with:

```
@socketio.on('image')
def image(image):
```

Honestly if you want some help. I have done lots of networking coding lately so I'm kind of fresh.

We can sit down and whip it up next week if you have some time? I already have a flask server ready for receiving files so I can reuse that code

[https://github.com/Gabryxx7/nlp-flask-server](https://github.com/Gabryxx7/nlp-flask-server)

Websocket page: [https://gist.githubusercontent.com/alexcambose/9fda720f244d8654626fd283fcd4b335/raw/190c657ebf713a091772123f44879d5b19e36180/streamer.html](https://www.notion.so/9fda720f244d8654626fd283fcd4b335)

It literally just streams your camera to a websocket

Alright I gotta go now, I have a bunch of b2b meetings starting soon.I hope the idea was clear! It's:

- JS streaming client to websocket
- Python Flask server running in background either:
- On nectar server, receiving from client and feeding to another websocket, maybe on another port or another endpoint like `/video_feed`
- Or running on the gallery laptop, same as above feeding onto localhost
- Python opencv app reading video feed from nectar's websocket ip on `/video_feed` or from localhost


https://stackoverflow.com/questions/42180937/sending-images-using-javascript-websockets-to-flask-server


Use these python packages versions:
```
pip install --upgrade python-socketio==4.6.0

pip install --upgrade python-engineio==3.13.2

pip install --upgrade Flask-SocketIO==4.3.1
```

https://blog.miguelgrinberg.com/post/flask-video-streaming-revisited/page/4
https://github.com/euguroglu/Flask_WebCam_OpenCV
gunicorn -w 1 --threads 100 --bind 0.0.0.0:3005 app:app
gunicorn --worker-class gevent --bind 0.0.0.0:3005  -w 2 app:app