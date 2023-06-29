const http = require('node:http');

//Server config
const hostname = 'localhost';
const port = 8000;

// Create a local server
const server = http.createServer((req, res) => {
    if (req.url == '/') { // HTML request
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>Hello World!</p></body></html>');
        res.end();
    }
    else if (req.url == '/data') { // JSON request
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({ message: "Hello World"}));
        res.end();
    }
    else { // Invalid request
        res.writeHead(404, {"Content-type":"text/plain"});
        res.end("Page Not Found!");
    }
});


server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });