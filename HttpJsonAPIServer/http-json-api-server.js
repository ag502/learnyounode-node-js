const http = require("http");

const [port] = process.argv.slice(2);

const getParsedTime = (time) => {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds(),
  };
};

const getUnixTime = (time) => {
  return { unixtime: time.getTime() };
};

http
  .createServer((req, res) => {
    const { method, url } = req;
    if (method === "GET") {
      const { pathname, searchParams } = new URL(url, "http://localhost");
      const time = new Date(searchParams.get("iso"));
      let result = null;

      if (pathname === "/api/unixtime") {
        result = getUnixTime(time);
      } else if (pathname === "/api/parsetime") {
        result = getParsedTime(time);
      }

      if (result) {
        res.writeHead(200, { "Content-type": "application/json" });
        res.end(JSON.stringify(result));
      } else {
        res.writeHead(400);
      }
    }
  })
  .listen(Number(port));
