const http = require("http");

const [url] = process.argv.slice(2);

http.get(url, (res) => {
  res.setEncoding("utf8").on("data", (data) => {
    console.log(data);
  });
});
