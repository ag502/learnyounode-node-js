## HTTP Client

`http.get()` 메소드는 간단한 GET 요청을 보내는 메소드 입니다. 첫 번째 인자로 GET 요청을 보낼 URL을, 두 번째 인자로 콜백함수를 전달합니다. 콜백함수는 아래와 같습니다.

```javascript
function callback(response) { /* ... */}
```

response 객체는 `Node Stream` 객체입니다. `Node Stream` 은 이벤트를 발생하는 객체로 취급할 수 있습니다. 가장 많이 사용되는 이벤트는 "data", "error", "end" 이며 이벤트는 아래와 같이 감지할 수 있습니다.

```javascript
response.on('data', function(data) {/* ... */})
```

response 객체는 `setEncoding()` 메소드를 가지고 있으며 "utf8"과 호출을 할 경우 data는 문자열로 받을 수 있습니다.