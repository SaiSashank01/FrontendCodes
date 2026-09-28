const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('THIS IS AN NODE JS FILE IN THIS FORMAT WE USE IT FOR THREE OR MORE TIMES BECAUSE IT WAS AN SERVER CLIENT SIDE\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
