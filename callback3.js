// test1(func1, 50, 100);

// func1은 함수
// test1 호출 결과로

// '첫번째 숫자 : 10'
// '두번째 숫자 : 20'
// '콜백 함수(두 값 덧셈) 결과 : 30'

// 위 3줄이 나오도록 test1, func1 함수 작성

function test1(callback, x, y) { // callback을 cb로 표기하는 경우도 있음
    console.log("첫번째 숫자 : " + x);
    console.log("두번째 숫자 : " + y);
    console.log("콜백 함수 (두 값 덧셈) : " + callback(x, y));
    console.log("--------------------------------");
}

function func1(x, y) {
    return x + y;
}

function test2(callback, x, y) { // callback을 cb로 표기하는 경우도 있음
    console.log("첫번째 숫자 : ", x);
    console.log("두번째 숫자 : ", y);
    // console.log("콜백 함수 (두 값 덧셈) : " + callback(x, y));
    callback(x, y);
    console.log("--------------------------------");
}

let func2 = (x, y) => {
    console.log("콜백 함수 (두 값 덧셈) : " + (x+y));
}

test1(func1, 10, 20);
test2(func2, 50, 100);