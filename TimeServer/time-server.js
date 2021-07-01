const net = require("net");

const portNumber = Number(process.argv[2]);

function parsingDate() {
  const currentTime = new Date();

  const year = currentTime.getFullYear();
  const month =
    currentTime.getMonth() + 1 < 10
      ? `0${currentTime.getMonth() + 1}`
      : currentTime.getMonth() + 1;
  const date =
    currentTime.getDate() < 10
      ? `0${currentTime.getDate()}`
      : currentTime.getDate();
  const hour =
    currentTime.getHours() < 10
      ? `0${currentTime.getHours()}`
      : currentTime.getHours();
  const minutes =
    currentTime.getMinutes() < 10
      ? `0${currentTime.getMinutes()}`
      : currentTime.getMinutes();
  return `${year}-${month}-${minutes} ${hour}:${minutes}`;
}

const server = net.createServer((socket) => {
  console.log(parsingDate());
  socket.end();
});

server.listen(portNumber);
