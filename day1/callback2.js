

function test1() {
    console.log("하이");
    return test1;
}
// 위 방법은 잘못된 방법, 재귀함수라고 해서 무한루프 돌 가능성, 쓸데없는 저장 공간 차지

function test2() {
    return () => {
        console.log("하이이");
    };
}

setTimeout(test2(), 3000);