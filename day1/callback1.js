// 콜백 함수
// 함수를 호출할 때 파라미터(인자)로 함수를 보내고,
// 호출된 함수에서는 필요한 작업을 끝낸 후 파라미터로 받은 함수를 실행하는 방식

// setTimeout 함수의 첫번째 파라미터는 함수 두번째 인자는 숫자를 넣도록 만들어짐

function test1() {
    console.log("안녕하세요");
}

// test1 뒤에 ()를 붙이면 함수 호출이 아닌 함수 실행
// setTimeout(test1(), 3000); -> 오류 발생
// setTimeout(test1, 3000);

// 보통은 익명 함수 혹은 화살표 함수를 통해 구현
setTimeout(function() {
        console.log("하이");
}, 3000);

setTimeout(() => {
    console.log("하이이");
}, 3000);