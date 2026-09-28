// Import the built-in 'http' module
const http = require('http');

// Define the hostname and port
const hostname = '127.0.0.1';
const port = 3000;

// Create the HTTP server
const server = http.createServer((req, res) => {
    // Set the response HTTP header with HTTP status and Content Type
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    // Send the response body "Hello, World!"
    res.end('THIS IS AN NODE JS FILE IN THIS FORMAT WE USE IT FOR THREE OR MORE TIMES BECAUSE IT WAS AN SERVER CLIENT SIDE\n');
});

// Start the server listening on the specified port and hostname
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});