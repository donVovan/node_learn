//⊗ndPmSvDr
import http from 'http';
import fs from 'fs';


http.createServer(async (request, response) => {
    if (request.url != '/favicon.ico') {


        try {
            let lpath = 'root/layout.html';
            let cpath = 'page/dir/name' + request.url + 'content.html';
            let tpath = 'page/dir/name' + request.url + 'title.html';

            let layout = await fs.promises.readFile(lpath, 'utf8');
            let content = await fs.promises.readFile(cpath, 'utf8');
            let title = await fs.promises.readFile(tpath, 'utf8');

            let html = layout.replace(/\{% get content %\}/, content);
            html = html.replace(/\{% get title %\}/, title);
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(html);
            response.end();
        } catch {
            let errorPath = 'root/404.html';
            let errorTitlePath = 'page/404/errorTitle.html';
            let errorContentPath = 'page/404/errorContent.html';

            let errorLayout = await fs.promises.readFile(errorPath, 'utf8');
            let errorTitle = await fs.promises.readFile(errorTitlePath, 'utf8');
            let errorContent = await fs.promises.readFile(errorContentPath, 'utf8');

            let errorPage = errorLayout.replace(/\{% get title %\}/, errorTitle);
            errorPage = errorPage.replace(/\{% get content %\}/, errorContent);
            response.writeHead(404, {'Content-Type': 'text/html'});
            response.write(errorPage);
            response.end();
        }
    }
}).listen(3000);