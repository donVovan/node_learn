//⊗ndPmSvRsp
import http from 'http';

http.createServer((request, response) => {
    response.setHeader('Cache-Control', 'no-cache');
    response.setHeader('Content-Type', 'text/html');
    response.statusCode = 200;
    response.write(`<h1>${new Date()}</h1>`);
    response.end();
}).listen(3000);