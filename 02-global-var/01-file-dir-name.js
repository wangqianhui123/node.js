#!/usr/bin/node
console.log('file name',__filename);
console.log('dir name',__dirname);

const path=require('path');
fileName=path.join(__dirname,'views','login.html');
console.log('fileName:',fileName);
