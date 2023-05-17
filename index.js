//⊗ndPmSvDr
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


        try {
            let lpath = 'root/layout.html';
            let cpath = 'page/dir/name' + request.url + 'content.html';
            let tpath = 'page/dir/name' + request.url + 'title.html';
            let mpath = 'page/dir/meta' + request.url + 'meta.html';

            let layout = await fs.promises.readFile(lpath, 'utf8');
            let content = await fs.promises.readFile(cpath, 'utf8');
            let title = await fs.promises.readFile(tpath, 'utf8');
            let meta = await fs.promises.readFile(mpath, 'utf8');

            let html = layout.replace(/\{% get content %\}/, content);
            html = html.replace(/\{% get title %\}/, title);
            html = html.replace(/\{% get meta %\}/, meta)
            response.writeHead(200, {'Content-Type': getMimeType(lpath)});
            response.write(html);
            response.end();
        } catch {
            let errorPath = 'root/404.html';
            let errorTitlePath = 'page/404/errorTitle.html';
            let errorContentPath = 'page/404/errorContent.html';
            let mpath = 'page/dir/meta' + request.url + 'meta.html';

            let errorLayout = await fs.promises.readFile(errorPath, 'utf8');
            let errorTitle = await fs.promises.readFile(errorTitlePath, 'utf8');
            let errorContent = await fs.promises.readFile(errorContentPath, 'utf8');
            let meta = await fs.promises.readFile(mpath, 'utf8');

            let errorPage = errorLayout.replace(/\{% get title %\}/, errorTitle);
            errorPage = errorPage.replace(/\{% get content %\}/, errorContent);
            errorPage = errorPage.replace(/\{% get meta %\}/, meta)
            response.writeHead(404, {'Content-Type': getMimeType(errorPath)});
            response.write(errorPage);
            response.end();
        }
    }
}).listen(3000);