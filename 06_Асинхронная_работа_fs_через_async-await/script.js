//⊗ndPmFSAA
import fs from 'fs';
import _ from 'lodash';

async function getSumOfAll() {
    try {
        let files = ['num1.txt', 'num2.txt', 'num3.txt', 'num4.txt', 'num5.txt'];
        let sum = 0;
        for (let file of files) {
            let num = String(_.random(1000));
            await fs.promises.writeFile(file, num)
        }
        for (let file of files) {
            sum += Number(await fs.promises.readFile(file, 'utf8'));
        }
        await fs.promises.writeFile('result.txt', String(sum));
    } catch (e) {
        console.log('где-то ошибка')
    }
}

getSumOfAll();
