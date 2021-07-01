## My First Async I/O

`readFileSync` 와 달리 `readFile` 은 비동기식으로 파일을 읽어 옵니다. </br>
`readFile` 은 인자로 파일 경로와 콜백함수를 인자로 받습니다. 콜백함수의 형태는 아래와 같습니다.

```javascript
function callback(err, data) { /* ... */ }
```
만약 에러가 발생하지 않았다면, 두 번째 인자인 `data`에 `buffer` 객체가 전달됩니다.