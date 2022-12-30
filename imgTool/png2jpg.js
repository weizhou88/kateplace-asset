const fs = require('fs');
const sharp = require('sharp');

const directory = '../arts/graphics/a10'; // replace with the directory path

fs.readdir(directory, (err, files) => {
  if (err) {
    console.error(`Error reading directory: ${err}`);
    return;
  }

  files.forEach(file => {
    if (file.endsWith('.png')) {
      const jpgFile = file.replace('.png', `.jpg`);
      sharp(`${directory}/${file}`)
        .toFormat('jpg')
        .toFile(`${directory}/${jpgFile}`, (error, info) => {
          if (error) {
            console.error(`Error converting file: ${error}`);
          } else {
            console.log(`Successfully converted ${file} to ${jpgFile}`);
          }
        });
    }
  });
});
