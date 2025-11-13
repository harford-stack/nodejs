// 터미널에서 복붙은 마우스 우클릭

// npm 사이트 접속, 검색 후 install

const figlet = require('figlet');

figlet("FIGHTING", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});



figlet.text(
  "COME ON!",
  {
    font: "Ghost",
    horizontalLayout: "default",
    verticalLayout: "default",
    width: 80,
    whitespaceBreak: true,
  },
  function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  }
);


// npm install을 하게 되면 node_modules가 생기는데 파일이 워낙 많아 git에 업데이트 하기 어려움
// 우선 .gitignore 파일을 만들어서 막아두고
// 같이 생성된 package.json을 git에 업로드하여 필요할 때 다운을 받는다