//⊗ndPmFSSy
import fs from "fs";
let num1 = Number(fs.readFileSync('text1.txt', 'utf8'));
let num2 = Number(fs.readFileSync('text2.txt', 'utf8'));

console.log(num1 + num2)