## HTTP File Server

`http.createServer()`를 통해 `http` 서버를 열 수 있습니다.<br/>
`http.createServer()` 는 서버로 부터 연결을 받을 때 마다 한 번씩 호출되는 콜백함수가 있습니다. 형태는 아래와 같습니다. <br/>

```javascript
function callback(request, response) {/* ... */}
```

두 인자는 HTTP 요청과 응답을 나타내는 객체를 의미합니다. `request`는 헤더나 쿼리 스트링과 같은 프로퍼티를 이용하기 위해 사용하며, `response`는 client에 전송 할 데이터를 의미합니다.

`http.createServer()`는 `server` 객체를 반환하며, 특정 포트로 서버를 시작하기 위해서는 `server.listen(portNumber)`를 호출해야 합니다. 