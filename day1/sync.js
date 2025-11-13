// console.log(1);
// setTimeout(() => {
//     console.log(2);
// }, 3000);
// console.log(3);

// 코드 순차적으로 1 2 3 출력될 것 같지만
// 실행해보면 1 3 2
// 효율성의 문제

// 1. 1초 뒤에 1 출력
// 2. 1번 끝난 후 1초 뒤에 2 출력
// 3. 2번 끝난 후 1초 뒤에 3 출력

// setTimeout(() => {
//     console.log(1);
// }, 1000);
// setTimeout(() => {
//     console.log(2);
// }, 2000);
// setTimeout(() => {
//     console.log(3);
// }, 3000);

setTimeout(() => {
    console.log(1);
    setTimeout(() => {
        console.log(2);
        setTimeout(() => {
            console.log(3);
        }, 1000);
    }, 1000);
}, 1000);