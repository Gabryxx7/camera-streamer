const https = require('https');
const fs = require('fs');
const ws = require('ws')
const WebSocketServer = ws.Server;
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
const port = process.env.PORT || 3006;

const httpsServer = https.createServer({
  // cert: fs.readFileSync("/etc/letsencrypt/live/dev.anthropomorphicmachine.com/fullchain.pem"),
  // key: fs.readFileSync("/etc/letsencrypt/live/dev.anthropomorphicmachine.com/privkey.pem")
  cert: fs.readFileSync("/etc/letsencrypt/live/anthropomorphicmachine.com/fullchain.pem"),
  key: fs.readFileSync("/etc/letsencrypt/live/anthropomorphicmachine.com/privkey.pem"),
}, app);
const wss = new ws.WebSocketServer({
  server: httpsServer
});

// const wss = new WebSocketServer({
//   host: '0.0.0.0',
//   port: 3006,
//   origin: 'https://0.0.0.0:3006',
//   rejectUnauthorized: false
// })

wss.on('connection', function connection(ws) {
  console.log("new connection");
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });

  ws.on('error', function(e) {
    console.log('error', e);
  });

  ws.on('close', function(e) {
    console.log('close', e);
  });

  ws.send('something');
});

httpsServer.listen(port, function listening() {
  console.log(`Starting server on port ${port}`);
});
