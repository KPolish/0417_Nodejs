const http = require('http');
const url = require('url');
const sHost = 'localhost';
const nPort = 8000;

function start(port, hostname, route, handle) {
    function onRequest(req, res) {
        let sPathname = url.parse(req.url).pathname;
        //route(sPathname);
            let content = route(sPathname, handle);
        res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(content);
        //res.write('Hello World!');
        res.end();
    }
 http.createServer(onRequest).listen(port, hostname);
 console.log('Server running at http://' + hostname + ':' + port);
}

exports.start = start;