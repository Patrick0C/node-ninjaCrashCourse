const fs = require('fs');
const reader = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8'});

const writer = fs.createWriteStream('./docs/blog4.txt');

// reader.on('data', (chunk) => {
//   console.log('--------NEW CHUNK---------')
//   console.log(chunk);
//
//   writer.write('\nNEW CHUNK \n')
//   writer.write(chunk);
reader.pipe(writer);
//
