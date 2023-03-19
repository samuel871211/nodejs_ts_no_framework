// import helper from './helper.js';
import * as http from 'http';
import addRouter from './router/index.js';
// import * as https from 'https';
// import * as http2 from 'http2';

const server = http.createServer();
addRouter(server);
server.listen(80);
