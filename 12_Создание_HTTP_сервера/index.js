//⊗ndPmSvDp
import http from 'http';

http.createServer((request, response) => {
    response.write('Ура!!! Это мой первый сервер!');
    response.end();
}).listen(3000);