
setTimeout(() => {
    console.log(2);
    setTimeout(() => {
        console.log(3);
        setTimeout(() => {
            console.log(1);
        }, 5000);
    }, 1000);
}, 2000);
