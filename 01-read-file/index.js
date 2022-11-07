const path = require('path');
const fs = require('fs');
const { stdout } = require('process');
const textFile = path.join(__dirname, 'text.txt');

const text = fs.createReadStream(textFile, 'utf-8');
text.on('data', data => stdout.write(data));
text.on('error', error => console.log('Error', error.message));