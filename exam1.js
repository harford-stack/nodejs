// vue에서는 let 안에 함수를 정의 (키 : 밸류) 형태

// 자바스크립트에서는 function test1() {
//     console.log("테스트1");
// }
// 브라우저에 의존 (html 파일 내 <script>영역에서 사용)

// node에서는 독립적으로 가능

// 터미널 활용하기
// 터미널 열기 : ctrl + shift + `
// 파일 이름이 길 때 : 파일 이름 철자 몇개 입력 후 tab키 누르기(tab키 한번 더 누르면 다른 파일)
// 위방향 화살표 누르면 터미널 최근 명령어 자동 입력

let var1 = 1;
let var2 = "홍길동";
let var3 = true;
// 자바에서 배열 생성 : int arr[] = new arr[10];
let var4 = [1, 2, 3, 4];
let var5 = {age : 30, name : "홍길동"};

// js에서는 변수에 함수(function)를 담을 수 있다
function test1() {
    console.log("테스트1");
}

let test2 = function() {
    console.log("테스트2");
}

// 위 2개는 동작하는게 같음
test1();
test2();

// 화살표 함수 사용을 위해서는 2번째 방법이 용이함
let test3 = () => {
    console.log("테스트3");
}
// 위 3개는 동작하는게 같음
test3();

// 중괄호{} 안의 내용일 1줄일 때
let test4 = () => console.log("테스트4");
test4();
// 위 4개는 동작하는게 같음