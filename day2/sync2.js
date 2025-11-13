// promise, async-await
// 비동기 통신(ajax, axios, fetch)
// 비동기 통신은 코드가 순차적으로 진행하지는 않는다

// fetch는 내장 함수 // ajax는 앞에 $가 붙는데, 이는 jquery에 있는거라 <script>로 명시해주고 시작해야함
// fetch 테스트를 위해 https://jsonplaceholder.typicode.com/ 접속, try it, resource 확인
// console.log(1);
// fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(json => console.log(json)) // .then((json) => {console.log(json)})
// console.log(2);

// fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(json => {
//         console.log(json)
//         console.log(2);
//     });

let obj = fetch('https://jsonplaceholder.typicode.com/users');
console.log(obj);
