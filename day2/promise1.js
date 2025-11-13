let promiseEx = new Promise((resolve, reject) => {
    if(false) {
        resolve("성공했을 때 실행");
    } else {
        reject("실패했을 때 실행");
    }
});

promiseEx
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    })