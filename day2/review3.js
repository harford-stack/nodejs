function calc(callback, x, y) {
    let result = callback(x, y);
    console.log(result);
}

// sum, multi, mod 함수 구현
calc(sum, 10, 20); // 30 출력(덧셈)
calc(multi, 3, 5); // 15 출력(곱셈)
calc(mod, 10, 3); // 1 출력(나머지 연산)

// let sum = (x, y) => x + y;
// let multi = (x, y) => x * y;
// let mod = (x, y) => x % y;

function sum(x, y) {
    return x + y;
}

function multi(x, y) {
    return x * y;
}

function mod(x, y) {
    return x % y;
}

// 함수를 한번만 사용할거라면 calc(mod, 10, 3); mod 대신 아예 함수를 안에서 정의하는 방법이 더 나음