'use strict';

const http = require('http');
const port = 8000;

const server = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.end('<h1>Hello World</h1>');
});

server.listen(port, () => console.log(`Listening on port ${port}.`));
