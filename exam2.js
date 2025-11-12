// x라는 파라미터 받을 때

function test1(x) {
    console.log(x);
}
test1(100);

let test2 = function(x) {
    console.log(x);
}
test2(100);

let test3 = (x) => {
    console.log(x);
}
test3(100);

let test4 = (x) => console.log(x);
test4(100);

// 파리미터가 있을 경우 ()생략 가능
let test5 = x => console.log(x);
test5(100);

let test6 = x => {
    console.log(x);
}
test6(100);