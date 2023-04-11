import fs from  'fs';

fs.promises.readFile('digits.txt', 'utf8').then(data => {
    data.split(',').map(num => {
        return fs.promises.writeFile(`text${num}.txt`, num);
    })
}).catch(err=> {
    console.log('ошибка');
});