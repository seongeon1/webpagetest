//객체 선언방식
//객체의 데이터는 키와 값이 한쌍으로 이루어져 있는데 이를 프로퍼티(property)라고 한다.
// #1
let obj1 = new Object();  //'O'가 대문자임
const obj2 = new Object(); 
let dic = new Object();

dic.boy = "소년";
dic.girl = "소녀";
dic.friend = "친구";

console.log(dic.boy);
console.log(dic.girl);
console.log(dic.friend);

//#2 객체 리터럴방식

let dic =  {boy: "소년", girl: "소녀", friend: "친구"};

console.log(dic.boy);
console.log(dic.girl);
console.log(dic.friend);

//객체 프로퍼티 동적 추가 및 삭제

dic.apple = '사과';
dic.ten = 10;

console.log(dic.apple);
console.log(dic.ten);

delete dic.apple;
console.log(dic.apple); //undefined

const dic = { present : "현재"};

//dic = {}; ==> 에러

console.log(dic.present);
dic.present = "변경";  //프로퍼티는 변경가능 
console.log(dic.present);

const unit = {
    attack : function(weapon){  
        return `${weapon}으로 공격한다.`;
    }
}

console.log(unit.attack("총기"));
console.log(unit.attack("총"));

//대괄호 표기법 

let dic = {
    boy: "소년",
    girl: "소녀",
    friend: "친구"
}


console.log(dic['boy']);
console.log(dic['girl']);
console.log(dic['friend']);
//이런방식으로 접근하는 이유 .... 검색을 가능하게 할 수 있음.

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('찾을 단어를입력하세요. ', function(key){
    let word = key;
    console.log(dic[word]);
    rl.close();
});

//단축 프로퍼티
let id = 'jamsu';
let pw = '1111';

let user = {
    id: id,
    pw: pw
};

console.log(user.id);
console.log(user.pw);

//for ~in반복문으로 객체 프로퍼티 읽기

for(let key in user){
    console.log(key);
    console.log(user[key]);
}



