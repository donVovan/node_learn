import fs from 'fs';

let num = fs.readFileSync('text3.txt', 'utf8');
num = String(Number(num) + 1);

fs.writeFileSync('text3.txt', num)