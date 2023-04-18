//⊗ndPmSvRsr
import http from 'http';
import fs from 'fs/promises';

http.createServer(async (request, response) => {
    let data;
    let type;
   if (request.url === '/favicon.ico'){
       data = await fs.readFile('favicon.ico');
       type = 'image/vnd.microsoft.icon'

       response.writeHead(200, {'Content-type': type});
       response.write(data);
       response.end();
   }
}).listen(3000);