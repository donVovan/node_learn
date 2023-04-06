//⊗ndPmFSSy
import fs from 'fs';

let obj = {
    'file1.txt': 'text1',
    'file2.txt': 'text2',
    'file3.txt': 'text3',
}

for (let key in obj) {
    fs.writeFileSync(key, obj[key]);
}