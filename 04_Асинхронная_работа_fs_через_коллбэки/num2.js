//⊗ndPmFSCl
import fs from 'fs';

fs.readFile('text.txt', 'utf8', (err, data)=>{
    if (!err){
        console.log(data)
    } else {
        console.log('ошибка', err);
    }
});