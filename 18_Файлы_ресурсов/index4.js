//⊗ndPmSvRsr
import http from 'http';
import fs from 'fs/promises';

http.createServer(async (request, response) => {
    if (request.url != '/favicon.ico') {
        let data;
        let type;

        switch (request.url) {
            case '/page.html':
                data = await fs.readFile('page.html', 'utf8');
                type = 'text/html';
                break;
            case '/img.png':
                data = await fs.readFile('img.png', 'utf8');
                type = 'image/png';
                break;
            case '/styles.css':
                data = await fs.readFile('styles.css', 'utf8');
                type = 'text/css';
                break;
            case 'script.js':
                data = await fs.readFile('script.js', 'utf8');
                type = 'text/javascript';
        }

        response.writeHead(200, {'Content-Type': type});
        response.write(data);
        response.end();
    }
}).listen(3000);