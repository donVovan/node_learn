//⊗ndPmSvRq
import http from 'http';

http.createServer((request, response) => {
    if (request.url != 'favicon.ico'){
        console.log(request.url); // теперь выполнится один раз

        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write('text');
        response.end();
    }

}).listen(3000);