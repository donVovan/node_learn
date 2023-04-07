//⊗ndPmFSCl
import fs from 'fs';

fs.readFile('text1.txt', 'utf8', (err, data1)=>{
    if (!err){
        fs.readFile('text2.txt', 'utf8', (err, data2)=>{
            if (!err){
                fs.readFile('text3.txt', 'utf8', (err, data3)=>{
                    if (!err){
                        let sum = String(Number(data1) + Number(data2) + Number(data3));
                        fs.writeFile('newSum.txt', sum, (err)=>{
                            if (err){
                                console.log('ошибка записи файла');
                            }
                        })
                    } else {
                        console.log('ошибка чтения файла 3')
                    }
                })
            } else {
                console.log('ошибка чтения файла 2')
            }
        })
    } else {
        console.log('ошибка чтения файла 1')
    }
})