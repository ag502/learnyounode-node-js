const http = require("http");

const urls = process.argv.slice(2);

const result = new Map();
let requestCount = 0;

urls.forEach((url, idx) => {
  if (!result.has(idx)) {
    result.set(idx, []);
  }
  http.get(url, (res) => {
    res.setEncoding("utf8");
    res.on("data", (data) => {
      result.get(idx).push(data);
    });
    res.on("end", () => {
      requestCount++;
      if (requestCount === urls.length) {
        result.forEach((resultString, _) => {
          console.log(resultString.join(""));
        });
      }
    });
  });
});
