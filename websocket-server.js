const WebSocket = require('ws');
const WebSocketServer = WebSocket.Server;
const WSS = new WebSocketServer({port: 3232});

WSS.on('connection', (ws) => {
  //console.log('We are connected.');

  ws.on('message', (message) => {

    WSS.clients.forEach(client => {
      client.send(message);
    });

    console.log(message);
  });
});

