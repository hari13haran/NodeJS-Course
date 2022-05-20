const http = require('http');

const server = http.createServer((req,res) => {
    //console.log(req.url, req.method);

    res.setHeader('Content-Type', 'text/plain');
    res.write('Hello! response sent!');
    res.end();
});

server.listen(3000, 'localhost', () => {
    console.log('listening for requests at port 3000');
});

