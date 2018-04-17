

const http = require('http');
function onRequest(req, res){ //간편하게
    res.writeHead(200, {'Content-type': 'text/html'});
    res.write('Hello, world!');
    res.end();
}
function start() {
    http.createServer(onRequest).listen(nPort, sHost);
    console.log('Server is running at' + sHost + ':' + nPort);//로그는 서버 만들때 많아도 별상관 없음
}

exports.start = start;