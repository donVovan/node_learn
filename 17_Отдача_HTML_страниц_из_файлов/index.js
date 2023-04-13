//⊗ndPmSvRq
import http from 'http';
import fs from 'fs/promises';

let obj = {
    '/page1': 'file1.html',
    '/page2': 'file2.html',
    '/page3': 'file3.html',
}

http.createServer(async (request, response) => {
    if (request.url != '/favicon.ico') {
        let text;
        let status;

        switch (request.url){
            case '/page1':
                text = await fs.readFile(obj['/page1'], 'utf8');
                break;
            case '/page2':
                text = await fs.readFile(obj['/page2'], 'utf8');
                break;
            case '/page3':
                text = await fs.readFile(obj['/page3'], 'utf8');
                break;
            default:
                text = 'page not found';
                status = 404;
                break;
        }

        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(text);
        response.end();
    }
}).listen(3000);