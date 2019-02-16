import App from './config/app';
import * as http from 'http';
import * as https from 'https';

const PORT = process.env.PORT || 3000;

const server = http.createServer(App);
let io = require('socket.io')(server);

server.listen(PORT, () => console.log(`Server started at port ${PORT}`));