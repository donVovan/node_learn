//⊗ndPmSvRsp
import http from 'http';

http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/html', 'Content-Language': 'ru'})
    response.write('{}');
    response.end();
}).listen(3000);