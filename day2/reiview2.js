// setTimeout(함수, 숫자(시간));

setTimeout(function(){
    console.log("안녕");
}, 3000);

setTimeout(()=>{
    console.log("안녕");
}, 3000);

// 각 js 파일을 모으기 위한 폴더를 만들었으므로
// 터미널에서 실행 시 경로 변경이 필요함
// cd 폴더명 입력하여 이동 후
// node 파일명 입력하여 실행