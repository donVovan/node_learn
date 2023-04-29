//⊗ndPmSvSt
import http from 'http';
import fs from 'fs';

http.createServer(async (request, response) => {
    if (request.url != '/favicon.ico') {
        let text;
        let status;
        let path = 'root' + request.url;

        try {
            if ((await fs.promises.stat(path)).isDirectory()) {
                path += '/index.html';
            }

            status = 200;
            text = await fs.promises.readFile(path, 'utf8');
        } catch (e) {
            status = 404;
            path = 'root' + '/404.html';
            text = await fs.promises.readFile(path, 'utf8');
        }

        response.writeHead(status, {'Content-Type': 'text/html'});
        response.write(text);
        response.end();
    }
}).listen(3000);