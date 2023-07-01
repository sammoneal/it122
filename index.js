// Use Node http package
import http from "http";

// Server config
const hostname = "localhost";
const port = 3000;

// Create a local server
const server = http.createServer();

// Router
server.on("request", (request, response) => {
  if (["/","/home"].includes(request.url)) {
    // Home Request
    htmlResponse(response, "Hello World!.");
  } else if (request.url == "/about") {
    // About Request
    htmlResponse(response, "About this page.");
  } else {
    // Invalid 404 Request
    notFoundResponse(response);
  }
  // End Response
  logger(response.statusCode, request.url);
  response.end();
});

// Create an HTML Response
const htmlResponse = (response, bodyText) => {
  response.writeHead(200, { "Content-Type": "text/html" });
  response.write(`<html><body><p>${bodyText}</p></body></html>`);
};

// Create a 404 Response
const notFoundResponse = (response) => {
  response.writeHead(404, { "Content-type": "text/plain" });
  response.write("Page Not Found!");
};

// Log Events
const logger = (statusCode, url) => {
  console.log(`${statusCode}:  http://${hostname}:${port}${url}`);
};

// Start Server
server.listen(port, hostname, logger('Server running at','/'));
