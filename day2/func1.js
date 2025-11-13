let list1 = [3,5,2,4,1];
let newList1 = [];
// list에서 3 이상의 숫자만 꺼내서 newList에 넣기

for(let i=0; i<list1.length; i++) {
    if(list1[i] >= 3) {
        newList1.push(list1[i]);
    }
}
console.log(newList1);

// filter 함수
let list = [3,5,2,4,1];
let newList = list.filter(x => {
    return x >= 3
});
console.log(newList);

// map 함수
let list2 = [3,5,2,4,1];
let newList2 = list2.map(x => {
    return x*2;
});
console.log(newList2);
// list2에 있는 값들을 모두 2배씩 증가

