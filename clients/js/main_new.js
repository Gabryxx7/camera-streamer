function sendSnapshot(localMediaStream, socket, ctx, video, canvas) {
  if (!localMediaStream) {
    console.log("No stream found")
    return;
  }

  ctx.drawImage(video, 0, 0, video.videoWidth, video.videoHeight, 0, 0, 300, 150);

  let dataURL = canvas.toDataURL('image/jpeg');
  console.log("Emitting frame")
  socket.emit('input image', dataURL);    
  socket.emit('output image')
}

function onSocketConnect(){
  console.log('YO! Connected!');
}

function onSocketImage(data){
  let photoContainer = document.getElementById('video-container');
  if(photoContainer !== null){
    console.log("Received a frame! (out-image-event)")
    var img = new Image();
    img.src = data.image_data;
    photoContainer.setAttribute('src', data.image_data);
  }
}

function trySocketConnect(type="Client", ws_url, protocol){
  console.log(type+ " Connecting to: " + ws_url +"\tSecure? " + (protocol == "https"));   
  return io.connect(ws_url, {secure: (protocol == "https"), transports : ['websocket'], reconnect: true, rejectUnauthorized: false});
}

$(document).ready(function(){
    let video = document.querySelector("#video-container");
    let canvas = document.querySelector("#video-canvas"); 
    let isClient = video.hasAttribute("client");

    let ctx = canvas !== null ? canvas.getContext('2d') : null;
    var localMediaStream = null;
  
    var ws_url = protocol+'://' +  domain+port+namespace
    var socket = trySocketConnect("Client", ws_url, protocol);

    socket.on('connect', onSocketConnect);
    if(isClient){
      socket.on('out-image-event', onSocketImage);  
    }

    if(!isClient && ctx !== null){    
      navigator.mediaDevices.getUserMedia(videoConstraints).then(function(stream) {
        video.srcObject = stream;
        localMediaStream = stream;
    
        setInterval(function () {
          sendSnapshot(localMediaStream, socket, ctx, video, canvas);
        }, timeBetweenFramesMs);
      }).catch(function(error) {
        console.log(error);
      });
    }
  });
  
