//⊗ndPmSvSt
import http from 'http';
import fs from 'fs';

function getMimeType(path) {
    let mimes = {
        html: 'text/html',
        jpeg: 'image/jpeg',
        jpg: 'image/jpeg',
        png: 'image/png',
        svg: 'image/svg+xml',
        json: 'application/json',
        js: 'text/javascript',
        css: 'text/css',
        ico: 'image/x-icon',
    };

    let exts = Object.keys(mimes);
    let extReg = new RegExp('\\.(' + exts.join('|') + ')$');

    let ext = path.match(extReg)[1];

    if (ext) {
        return mimes[ext];
    } else {
        return 'text/plain';
    }
}

http.createServer(async (request, response) => {
    if (request.url != '/favicon.ico') {
        let text;
        let status;
        let path = request.url;

        if (path === '/') {
            path = '_root/index';
        } else {
            path = path.slice(1);

            if (!path.endsWith('/')) {
                path += '.html';
            }

            if (path.includes('/')) {
                let parts = path.split('/');
                let file = parts.pop();
                let dir = parts.join('/');
                path = `${dir}/${file}.html`;
            }
        }

        path = `root/${path}`;

        try {
            if ((await fs.promises.stat(path)).isDirectory()) {
                path += '/_layout.html';
            }

            status = 200;
            text = await fs.promises.readFile(path);
        } catch (e) {
            status = 404;
            path = '_root/404.html';
            text = await fs.promises.readFile(path, 'utf8');
        }

        response.writeHead(status, {'Content-Type': getMimeType(path)});
        response.write(text);
        response.end();
    }
}).listen(3000);