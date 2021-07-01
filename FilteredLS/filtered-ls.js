const fs = require("fs");

const [filePath, extension] = process.argv.slice(2);

fs.readdir(filePath, (err, list) => {
  list.forEach((file) => {
    if (file.includes(`.${extension}`)) {
      console.log(file);
    }
  });
});
