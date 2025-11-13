function delay(time) {
    return new Promise((resolve) => {
        setTimeout(resolve, time);
    });
}

// async ~ await
// async는 함수 선언 시 작성이 되어야 함, 동기적으로 처리하겠다는 의미
// await는 동기적으로 처리할 부분에 선언
async function run() {
    console.log("A");
    await delay(1000); // await가 붙으면 해당 작업이 끝날 때까지 대기하라는 의미
    console.log("B");
    await delay(1000); // async 없이 await 단독 사용 불가능, async는 단독 사용 가능
    console.log("c");
}
run();