let namespace = "/test";
// var protocol = "http"
var protocol = "https"
var port = ":3006";
// var port = "";
// var port = "/ws";
var domain = "domain.com";
var timeBetweenFramesMs = 33;

  
var videoConstraints = {
    video: {
      width: { min: 640 },
      height: { min: 480 }
    }
  };