//⊗ndPmFSCl
import fs from 'fs';

for (let i = 1; i <= 10; i++) {
    fs.writeFile(`text${i}.txt`, `${i}`, (err) => {
        if (err) {
            console.log('ошибка');
        }
    });
}