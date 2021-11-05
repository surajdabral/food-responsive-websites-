const http = require('http');

const server  = http.createServer((req, res) {
    res.end('Hello, World');
});

server.listen(10000,"127.0.0.1",(){
    consolelog("listening to the port 10000")
});