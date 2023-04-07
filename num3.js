import fs from 'fs';

try {
    let num1 = Number(fs.readFileSync('text4.txt', 'utf8'));
    let num2 = Number(fs.readFileSync('text5.txt', 'utf8'));
    let num3 = Number(fs.readFileSync('text6.txt', 'utf8'));

    let sum = String(num1 + num2 + num3);

    fs.writeFileSync('text7.txt', sum);
} catch (err) {
    console.log('ошибка чтения или записи файла', err)
}