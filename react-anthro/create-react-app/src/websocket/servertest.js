const { createServer } = require("http");

const cors = require("cors");

const app = require("express")();
const WebSocket = require("ws");

app.use(cors());

const port = process.env.PORT || 3006;
const server = createServer(app);

server.listen(port, () => {
  console.log(`Starting server on port ${port}`);
});
const wss = new WebSocket.Server({ path: "/ws", server });
wss.on("connection", (ws) => {
  console.log("WebSocket connection established");

  ws.on("close", () => {
    console.log("WebSocket connection closed");
  });
});