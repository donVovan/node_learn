//⊗ndPmFSThn
import fs from 'fs';

fs.promises.readFile('num2.txt', 'utf8').then(data => {
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
        sum += Number(data[i])
    }
    console.log(sum);
}).catch(err => {
    console.log('файл не найден')
});