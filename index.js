//⊗ndPmFSPp
import fs from 'fs';

let readableStream = fs.createReadStream('million1.txt', 'utf8');
let writeableStream = fs.createWriteStream('million3.txt');

readableStream.pipe(writeableStream);