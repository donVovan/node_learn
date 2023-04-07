//⊗ndPmFSCl
import fs from 'fs';

fs.readFile('text1.txt', 'utf8', (err, data1)=>{
    if (!err){
        fs.readFile('text2.txt', 'utf8', (err, data2)=>{
            if (!err){
                fs.readFile('text3.txt', 'utf8', (err, data3)=>{
                    if (!err){
                        fs.readFile('text4.txt', 'utf8', (err, data4)=>{
                            if (!err){
                                fs.readFile('text5.txt', 'utf8', (err, data5)=>{
                                    if (!err){
                                        console.log(Number(data1) + Number(data2) + Number(data3)+ Number(data4) + Number(data5));
                                    } else {
                                        console.log('ошибка чтения файла 5');
                                    }
                                })
                            } else {
                                console.log('ошибка чтения файла 4');
                            }
                        })
                    } else {
                        console.log('ошибка чтения файла 3');
                    }
                });
            } else {
                console.log('ошибка чтения файла 2');
            }
        });
    } else {
        console.log('ошибка чтения файла 1');
    }
});