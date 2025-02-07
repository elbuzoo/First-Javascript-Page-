// server.js
const http = require('http');

const server = http.createServer((req, res) => {
  // Handle requests and send responses
  if (req.url === '/') {
    res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'}); // added charset
    res.end('<!DOCTYPE html><html><body><h1>Welcome to my web server!</h1></body></html>'); // added HTML structure
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain; charset=UTF-8'}); // added charset
    res.end('Not Found\n'); // added newline character
  }
});

// Start the server
server.listen(3000, () => {
  console.log('Server started on port 3000');
});
