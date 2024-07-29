import fs from 'fs'; 
import path from 'path';
fs.mkdir(path.join(__dirname, '/test'), {}, err =>{
if (err) throw err;
console.log('folder created...');
});

fs.wrightFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World!', err => {
    if (err) throw err;
    console.log('W...'); 
});