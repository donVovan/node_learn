//⊗ndPmFSCl
import fs from 'fs';

fs.readFile('num1.txt', 'utf8', (err, data)=> console.log(data * data));

console.log('выведется раньше')
