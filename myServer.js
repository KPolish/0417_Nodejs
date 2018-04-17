const http = require('http');
const sHost = 'localhost';
const nPort = 8000;

function start(port, hostname) {
    function onRequest(req, res) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('Hello World!');
        res.end();
    }
 http.createServer(onRequest).listen(port, hostname);
 console.log('Server running at http://' + hostname + ':' + port);
}

exports.start = start;