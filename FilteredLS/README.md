## Filtered LS

`readdir`는 비동기로 디렉토리에 있는 파일들을 불러오는 함수 입니다. </br>
첫 번째 인자로 파일경로를, 두 번째 인자로 콜백함수를 받습니다. 콜백함수의 형태는 아래와 같습니다.
```javascript
function callback (err, list) { /* ... */}
```
에러가 발생하지 않는다면 디렉토리의 리스트를 `list`로 전달 받습니다.