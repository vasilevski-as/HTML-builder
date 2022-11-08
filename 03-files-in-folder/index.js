const path = require('path');
const fs = require('fs');
fs.readdir(path.join(__dirname, 'secret-folder'), { withFileTypes: true },(error, files) => {
  if (error)
    console.log(error);
  else
    files.forEach(file => {
      if (file.isFile()){
        fs.stat(path.join(__dirname, 'secret-folder', file.name), (err, stats) => {
          let fileSize = (stats.size/1024) + ' kb';
          //console.log(fileSize);
          let inputStr = file.name.split('.')[0] + ' - '
        + path.extname(file.name).replace('.', '')
        + ' - ' + fileSize;
          console.log(inputStr);
        }); 
      }
    });
});