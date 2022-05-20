const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) => {
    //console.log(req.url, req.method);

    // Send a text response
    // res.setHeader('Content-Type', 'text/plain');
    // res.write('Hello! response sent!');
    // res.end();

    // Send a html file as response
    res.setHeader('Content-Type', 'text/html');

    fs.readFile('./views/index.html', (err, data) => {
        if(err) {
            console.log(err);
            res.end();
        } else {
            res.end(data);
        }
    });

});

server.listen(3000, 'localhost', () => {
    console.log('listening for requests at port 3000');
});

