import fs from 'fs';

let text = fs.readFileSync('readme.txt', 'utf8');
console.log(text);