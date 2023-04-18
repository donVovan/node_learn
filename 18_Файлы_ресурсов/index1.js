//⊗ndPmSvRsr
import http from 'http';
import fs from 'fs/promises';

http.createServer(async (request, response) => {
   if (request.url != '/favicon.ico'){
       let data;
       let type;

       switch (request.url) {
           case 'styles.css':
               data = await fs.readFile('styles.css', 'utf8');
               type = 'text/css';
               break;
       }
       response.writeHead(200, {'Content-type': type});
       response.write(data);
       response.end();
   }
}).listen(3000);