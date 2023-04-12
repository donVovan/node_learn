import fs from 'fs';
import { createGzip } from 'zlib';

fs.readdir('.', (err, files) => {
    if (err){
        console.log('ошибка')
    }
    files.map(file => {
        if (/^text\d+\.txt$/.test(file)){
            let readStream = fs.createReadStream(file, 'utf8');
            let writeStream = fs.createWriteStream(`${file}.gz`);
            let gzipStream = createGzip();

            readStream.pipe(gzipStream).pipe(writeStream);
        }
    });
});
