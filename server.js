
//server setup
require('dotenv').config();
const http = require('http');
const app = require('./app');
const port = process.env.APP_PORT || 3000;
const server = http.createServer(app);
//start the server
server.listen(port);
