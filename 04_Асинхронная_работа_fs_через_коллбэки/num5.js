//⊗ndPmFSCl
import fs from 'fs';

fs.readFile('text1.txt', 'utf8', (err, data)=>{
    if (!err){
        let sqv = String(data * data);
        fs.writeFile('text1.txt', sqv, (err)=> {
            if (err){
                console.log('ошибка записи файла');
            }
        });
    } else {
        console.log('ошибка чтения файла');
    }
});