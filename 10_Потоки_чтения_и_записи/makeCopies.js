import fs from 'fs';

let read = fs.createReadStream('million.txt', 'utf8');

for (let i = 1; i <= 3; i++) {
    let write = fs.createWriteStream(`file${i}.txt`);
    read.on('data', function (chunk) {
        write.write(chunk);
    })
}
