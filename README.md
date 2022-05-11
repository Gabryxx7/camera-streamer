# WebSocket camera streamer
![Camera streamer scheme](https://github.com/Gabryxx7/camera-streamer/blob/main/camera-streamer.png?raw=true)

This is a tool to allow video streaming between a user and another client with some processing in between done by the server.
The ideal process is this:
1. Start the server and open the WebSocket (with SSL)
2. User access the website through a link (a domain is needed to use SSL and HTTPS)
3. The page streams the user's video feed through JS and `socket.io`, using SSL and HTTPS
4. The server receives the user's video, processes it with `OpenCV` and forwards it to the client for further processing
5. The client processes the user's video and sends back a video feed from their end
6. The server forwards the client's video to the web page

In short, this is what's happening:
- JS streaming client's video to websocket
- Python Flask server running in background on the server
    - Receiving from client and feeding to another websocket, maybe on another port or another endpoint like `/video_feed`
- Python opencv app on the client's end reading video feed from the websocket or on `/video_feed` (or from localhost on the server)

## Instructions
The code itself is not too complicated but setting up the server and configuring `nginx` might be a bit tricky.
Have a look at `nginx/camera-streamer.conf` to have an idea on how to set up the proxy for both the server and the WebSocket.

1. Install `nginx` and `git`
2. Clone the repo
3. Install the `requirements.txt` (Sorry, it needs to be cleaned, forgot to make a `venv` :( )
4. Edit `nginx/camera-streamer.conf` with your domain and the right paths
5. Copy the new nginx conf file to `/etc/nginx/sites-available` 
6. Enable the nginx conf with `sudo ln -s /etc/nginx/sites-available/camera-streamer.conf /etc/nginx/sites-enabled/`
7. Reload nginx with `sudo nginx -t && sudo nginx -s reload`
8. Start Flask server with `sudo python3 /home/gabryxx7/camera-streamer/server/server_flask.py`
9. Start streaming on `domain.subdomain.com/clients`
10. You should see your own webcam feed, and the server processed feed as well. That means the server is working, receiveing the video feed, processing it and sending it back.

## Useful links
- Video streaming with opencv and flask: [https://towardsdatascience.com/video-streaming-in-web-browsers-with-opencv-flask-93a38846fe00](https://towardsdatascience.com/video-streaming-in-web-browsers-with-opencv-flask-93a38846fe00)
- Webcam live streaming with websockets: [https://medium.com/@alexcambose/webcam-live-streaming-with-websockets-and-base64-64b1b4992db8](https://medium.com/@alexcambose/webcam-live-streaming-with-websockets-and-base64-64b1b4992db8)
- OpenCV and Flask live streaming [https://github.com/NakulLakhotia/Live-Streaming-using-OpenCV-Flask](https://github.com/NakulLakhotia/Live-Streaming-using-OpenCV-Flask)
- [https://stackoverflow.com/questions/66359505/stream-video-to-flask-app-using-flask-socketio](https://stackoverflow.com/questions/66359505/stream-video-to-flask-app-using-flask-socketio)
- Another Flask app I worked on: [https://github.com/Gabryxx7/nlp-flask-server](https://github.com/Gabryxx7/nlp-flask-server)
- Sending images from JS to Flask: [https://stackoverflow.com/questions/42180937/sending-images-using-javascript-websockets-to-flask-server](https://stackoverflow.com/questions/42180937/sending-images-using-javascript-websockets-to-flask-server)
- [https://blog.miguelgrinberg.com/post/flask-video-streaming-revisited/page/4](https://blog.miguelgrinberg.com/post/flask-video-streaming-revisited/page/4)
- [https://github.com/euguroglu/Flask_WebCam_OpenCV](https://github.com/euguroglu/Flask_WebCam_OpenCV)

Example on how to run it with gunicorn:

```bash
gunicorn -w 1 --threads 100 --bind 0.0.0.0:3005 app:app
gunicorn --worker-class gevent --bind 0.0.0.0:3005  -w 2 app:app
```




> The working file is app.py
Run it as `sudo python3 server/app.py`
Run it as `sudo nohup python3 ~/camera-streamer/server/app.py &`

Start the streamher here: https://domain.com/clients/streamer.html
And see the feed from the client here: https://domain.com/clients/client.html