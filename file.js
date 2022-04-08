//reading files
const fs = require('fs');

// fs.readFile('./docs/blog1.txt', (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data.toString());
// });

//console.log('last line');
fs.readFile('./docs/blog1.txt', (err, data) =>{
  if (err) {
    console.log(err)
  }
  console.log(data.toString());
})

//write files
fs.writeFile('./docs/blog1.txt', 'Goodybye!',() => {
  console.log('Finished writing')
});

fs.writeFile('./docs/blog2.txt', 'Helloooooo!',() => {
  console.log('Finished writing')
});

//directories
if (!fs.existsSync('./assets')) {

  fs.mkdir('./assets', (err) =>{
    if(err){
      console.log(err);
    }
    console.log('Folder created');
    fs.writeFile('./assets/test.txt', 'Test written in assets dir!',() => {
      console.log('Finished writing in assets dir')
    });
  });
}else{
    fs.rmdir('./assets', (err) => {
      if (err){
        console.log(err);
      }
      if (fs.existsSync('./assets/test.txt')) {
        fs.unlink('./assets/test.txt', (err) => {
          if (err) {
            console.log(err);
          }
          console.log('Test file deleted in assets');
        })
      }
      console.log('Assets folder deleted');

  })
}

//deleting files

if (fs.existsSync('./docs/deleteme.txt')) {
  fs.unlink('./docs/deleteme.txt', (err) => {
    if (err) {
      console.log(err);
    }
    console.log('File deleted in docs');
  })
}
