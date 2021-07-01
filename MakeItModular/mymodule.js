const fs = require("fs");

function filterFile(filePath, extension, callback) {
  fs.readdir(filePath, (err, data) => {
    if (err) {
      return callback(err);
    }

    const files = data.filter((file) => file.includes(`.${extension}`));
    return callback(null, files);
  });
}

module.exports = filterFile;
