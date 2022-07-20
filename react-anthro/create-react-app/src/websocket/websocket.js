export default class SwarmWebSocket{
    constructor(url) {
        this.url = url;
        this.ws = this.connectToServer(this.url);    
        // this.webSocketServer = new WebSocket(this.url);
        // // I'm maintaining all active connections in this object
        // this.clients = {};

        // this.webSocketServer.onopen = (event) => {
        //         this.webSocketServer.send(JSON.stringify(apiCall));
        //         var userID = this.getUniqueID();
        //         console.log((new Date()) + ' Recieved a new connection from origin ' + request.origin + '.');
        //         // You can rewrite this part of the code to accept only the requests from allowed origin
        //         const connection = request.accept(null, request.origin);
        //         this.clients[userID] = connection;
        //         console.log('connected: ' + userID + ' in ' + Object.getOwnPropertyNames(this.clients))
        //     };

        //     this.webSocketServer.onmessage = function (event) {
        //         const json = JSON.parse(event.data);
        //         try {
        //         if ((json.event = "data")) {
        //         }
        //         } catch (err) {
        //             console.log(err);
        //         }
        //     };
    }
    
    // This code generates unique userid for everyuser.
    getUniqueID = () => {
      const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
      return s4() + s4() + '-' + s4();
    };

    connectToServer(url) {    
        this.ws = new WebSocket(url);
        return new Promise((resolve, reject) => {
            const timer = setInterval(() => {
                if(this.ws.readyState === 1) {
                    clearInterval(timer);
                    resolve(ws);
                }
            }, 10);
        });   
    }
}