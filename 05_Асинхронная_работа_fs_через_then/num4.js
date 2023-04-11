import fs from 'fs';

let names = ['text1.txt', 'text2.txt', 'text3.txt', 'text4.txt', 'text5.txt'];
let files = [];

names.map(name=> files.push(fs.promises.readFile(name, 'utf8')));

let sum = 0;

Promise.all(files).then(data => {
    data.map(num => sum += Number(num))
    fs.promises.writeFile('result.txt', String(sum))
}).catch(err=> {
    console.log('где-то ошибка')
})

