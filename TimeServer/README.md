## Time Server

TCP 서버 연결을 위해서는 `net` 모듈이 필요합니다.</br>
`net` 모듈은 `net.createServer` 함수를 가지고 있습니다. 이 함수는 인자는 한 번 이상 실행되는 연결 리스너 함수 입니다. 이 함수는 연결될 때 마다 호출되며 형태는 아래와 같습니다.

```javascript
function listener (socket) {/* ... */}
```

`net.createServer`는 `server` 인스턴스를 반환하며 특정 포트의 TCP연결을 시작하려면 `server.listen(portNumber)`를 실행해야 합니다. <br/>

`socket`에는 연결에 관련된 메타 데이터들이 있으며 읽고 쓸수 있습니다. `socket.write(data)`로 데이터를 쓸 수 있으며, `socket.end()`로 socket을 닫을 수 있습니다.