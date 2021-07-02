const http = require("http");
const map = require("through2-map");

const [port] = process.argv.slice(2);

http
  .createServer((req, res) => {
    const { method } = req;
    if (method === "POST") {
      let body = [];
      req
        .on("data", (chunk) => {
          body.push(chunk);
        })
        .on("end", () => {
          body = body.join("").toString().toUpperCase();
          res.write(body);
          res.end();
        });
    }
  })
  .listen(port);
