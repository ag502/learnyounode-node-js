const http = require("http");

const [url] = process.argv.slice(2);

http.get(url, (res) => {
  res.setEncoding("utf8");
  const string = [];
  let sumOfChar = 0;
  res.on("data", (data) => {
    sumOfChar += data.length;
    string.push(data);
  });
  res.on("end", (a) => {
    console.log(sumOfChar);
    console.log(string.join(""));
  });
});
