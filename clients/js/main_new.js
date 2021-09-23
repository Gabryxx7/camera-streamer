$(document).ready(function(){
    let namespace = "/test";
    let video = document.querySelector("#videoElement");
    let canvas = document.querySelector("#canvasElement"); 
    let ctx = null;
    if(canvas !== null){
      ctx = canvas.getContext('2d');
    }
    photo = document.getElementById('photo');
    var localMediaStream = null;
  
    var socket = io.connect(location.protocol + '//' + document.domain + ':' + location.port + namespace);
  
    function sendSnapshot() {
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
  
    socket.on('connect', function() {
      console.log('YO! Connected!');
    });

        
    var img = new Image();
    socket.on('out-image-event',function(data){
      if(photo === null)
        return;
      console.log("out-image-event!")
      img.src = data.image_data;
      photo.setAttribute('src', data.image_data);
    });
  
  
    var constraints = {
      video: {
        width: { min: 640 },
        height: { min: 480 }
      }
    };

    if(ctx !== null){    
      navigator.mediaDevices.getUserMedia(constraints).then(function(stream) {
        video.srcObject = stream;
        localMediaStream = stream;
    
        setInterval(function () {
          sendSnapshot();
        }, 33);
      }).catch(function(error) {
        console.log(error);
      });
    }
  });
  