const config = require('../config');
const WebSocket = require('ws');
const WebSocketServer = WebSocket.Server;

let wss;

module.exports = { 
    start() {
        wss = new WebSocketServer({ port: config.websocketPort });

        console.log(`WebSocketServer starting on port ${config.websocketPort}!`);

        wss.broadcast = msg => {
            wss.clients.forEach(client => {
                if (client.readyState === WebSocket.OPEN) {
                    client.send(msg);
               }
            })
        }

        wss.on('connection', ws => {
            console.log('Connection received ->');
        });
    },

    broadcast(data) {
        wss.broadcast(JSON.stringify(data));
    }
}