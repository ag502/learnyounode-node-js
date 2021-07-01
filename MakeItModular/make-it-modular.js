const filterFile = require("./mymodule.js");

const [filePath, extension] = process.argv.slice(2);

filterFile(filePath, extension, (err, data) => {
  if (err) {
    console.log(err);
  }
  data.forEach((file) => {
    console.log(file);
  });
});
