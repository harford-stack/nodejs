function delay(time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve((time/1000) + "초 후 실행");
        }, time);
    });
}

delay(1000)
    .then(msg => {
        console.log(msg);
        return delay(2000);
    })
    .then(msg => {
        console.log(msg);
        return delay(3000);
    })
    .then(msg => {
        console.log(msg);
    })