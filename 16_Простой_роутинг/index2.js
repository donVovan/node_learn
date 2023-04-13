//⊗ndPmSvRq
import http from 'http';

let obj = {
    '/page1': '1',
    '/page2': '2',
    '/page3': '3',
}

http.createServer((request, response) => {
    if (request.url != '/favicon.ico') {
        let text;
        let status = 200;

        switch (request.url) {
            case '/page1':
                text = obj['/page1'];
                break;
            case '/page2':
                text = obj['/page2'];
                break;
            case '/page3':
                text = obj['/page3'];
                break;
            default:
                text = 'page not found';
                status = 404;
                break
        }

        response.writeHead(status, {'Content-Type': 'text/html'});
        response.end();
    }
}).listen(3000);