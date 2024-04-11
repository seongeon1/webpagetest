//화살표 함수 기보녛잇ㄱ

let plus = (a,b) =>{
    return a+b;
}

let result = plus(10,20);
console.log('두 수의 합 :'+ result);

//구현부가 return 밖에 없는 경우
let plus2 = (a,b) => a+b;

let result2 = plus2(10,20);

console.log('두 수의 합 :'+ result2);

//매개변수가 하나인 경우
let plus3 = a=> a+1;

let result3 = plus3(10);
console.log('값의 증가: ' +result3);

//매개변수가 하나도 없을 경우

let plus4 = ()=> "플러스";

let result4 = plus4();
console.log('값의 증가: ' +result4);
