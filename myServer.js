const http = require('http');
const url = require('url');
const sHost = 'localhost';
const nPort = 8000;

function start(port, hostname, route) {
    function onRequest(req, res) {
        let sPathname = url.parse(req.url).pathname;
        route(sPathname);
        //console.log('url : ' + req.url);
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('Hello World!');
        res.end();
    }
 http.createServer(onRequest).listen(port, hostname);
 console.log('Server running at http://' + hostname + ':' + port);
}

exports.start = start;