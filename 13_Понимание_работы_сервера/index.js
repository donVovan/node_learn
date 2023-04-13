//⊗ndPmSvUn
import http from 'http';

let i = 100;

http.createServer((request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.statusCode = 200;
    if (i <= 0) {
        response.write('upssss');
    } else {
        response.write(String(--i));
    }
    response.end();
}).listen(3000);