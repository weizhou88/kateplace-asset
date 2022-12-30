const fs = require('fs');
const sharp = require('sharp');

const directory = '../arts/graphics/a10'; // replace with the directory path
const width = 512;

fs.readdir(directory, (err, files) => {
  if (err) {
    console.error(`Error reading directory: ${err}`);
    return;
  }

  files.forEach(file => {
    if (file.endsWith('.jpg')) {
      const pngFile = file.replace('.jpg', `-512.png`);
      sharp(`${directory}/${file}`)
        .resize({ width })
        .toFormat('png')
        .toFile(`${directory}/${pngFile}`, (error, info) => {
          if (error) {
            console.error(`Error resizing and converting file: ${error}`);
          } else {
            console.log(`Successfully resized and converted ${file} to ${pngFile}`);
          }
        });
    }
  });
});
