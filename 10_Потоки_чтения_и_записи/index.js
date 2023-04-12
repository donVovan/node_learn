import fs from 'fs';

let writeableStream = fs.createWriteStream('million1.txt');

for (let i = 1; i < 1000000; i++) {
    writeableStream.write(i + '\n')

}
writeableStream.end();