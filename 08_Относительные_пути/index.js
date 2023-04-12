import fs from 'fs/promises';

let path1 = 'dir1/dir2/readme.txt';
let data1 = await fs.readFile(path1, 'utf8');

let path2 = '../dir1/dir2/readme.txt';
let data2 = await fs.readFile(path2, 'utf8');

let path3 = '../../dir/readme.txt';
let data3 = await fs.readFile(path3, 'utf8');

let path4 = '../../../dir1/dir2/dir3/readme.txt';
let data4 = await fs.readFile(path4, 'utf8');