const fs = require("fs");

const filePath = process.argv[2];

fs.readFile(filePath, (err, data) =>
  console.log(data.toString().split("\n").length - 1)
);
