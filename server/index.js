const http = require('http');
const app = require('./app.js');

const PORT = 5000;

const server = http.createServer(app);

server.listen(PORT, () => { console.log('Listening on PORT ', PORT); });
server.on('error', (err) => { console.error(err); });
