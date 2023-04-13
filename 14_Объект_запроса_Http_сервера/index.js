//⊗ndPmSvRq
import http from 'http';

http.createServer((request, response) => {
    console.log(request.url);
    console.log(request.method);
    console.log(request.headers.host);

    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('text');
    response.end();
}).listen(3000);