//⊗ndPmFSAA
import fs from 'fs';

async function sum() {
    try {
        let num1 = await fs.promises.readFile('text1.txt', 'utf8');
        let num2 = await fs.promises.readFile('text2.txt', 'utf8');

        await fs.promises.writeFile('result.txt', String(Number(num1) + Number(num2)));
    } catch (e) {
        console.log('ошибка')
    }
}

sum();