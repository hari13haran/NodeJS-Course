const { clear } = require('console');
const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt', { encoding : 'utf-8' });
const writeStream = fs.createWriteStream('./docs/blog4.txt');

// Reads the whole file in chunk parts & writes in new file as chunk parts 
readStream.on('data', (chunk) => {
    console.log('---- NEW CHUNK ----');
    console.log(chunk);
    writeStream.write('\n---NEW CHUNK---\n');
    writeStream.write(chunk);
});

// Pipes can be used to automatically write in the new file as it reads
const readStream2 = fs.createReadStream('./docs/blog5.txt', { encoding : 'utf-8' });
const writeStream2 = fs.createWriteStream('./docs/blog6.txt');
readStream2.pipe(writeStream2);



