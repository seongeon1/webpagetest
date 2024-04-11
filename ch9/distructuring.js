//비구조화 할당


const color = ['red', 'green', 'blue'];

//let r = color[0];
//let g  = color[1];
//let b = color[2];

console.log(r);
console.log(g);
console.log(b);

let user = {
    id : 'jamsuham',
    pw : '1234',
    name : '잠수함',
    age : 30,
};

//배열의 구조가 많아지면 가독성이 떨어짐.

let id = user.id;
let pw = user.pw;
let name = user.name;
let age = user.age;

console.log(id);
console.log(pw);
console.log(name);
console.log(age);

//배열 구조 분해
const color2 = ['red', 'green', 'blue'];
//let [r,g,b] = color2;

console.log(r);
console.log(g);
console.log(b);


[b, g, r] = [r,g,b];
console.log(r); //blue
console.log(g); //green
console.log(b); //red

//배열의 기본값 설정

const [a,b,c] = ['C#', 'JavaScript'];
console.log(a); //C#
console.log(b); //JavaScript
console.log(c); //undefined

//const [a,b, c = 'C언어'] = ['C#', 'JavaScript']; 로 변경해준다면 c의 undifined값을 해결할 수있음.

//일부 요소 값 무시

const [x, , y, z]= ['C#', 'JavaScript', 'Phython', 'react'];

console.log(x); //C#
console.log(y); //Phython
console.log(z); //react


/* 배열의 나머지 요소 가져오기

const [a,b, ...rest] = [1,2,3,4,5,6,7,8,9];
console.log(a); //1
console.log(b); //2
console.log(rest); //[3,4,5,6,7,8,9]
console.log(rest.length); //7
*/

// 배열끼리의 결합

const arr1 = ['C#', 'javascript'];
const arr2 = ['Phython', 'React', 'C++'];
const arr3 = [...arr1,...arr2];

console.log(arr3);



//객체 비구조화 할당

let user3 = {
    name : '잠수함',
    age : 30
};

//let {id = 'guest', name, age} = user3;

//user3 의 데이터가 많은데 다가져오고 싶을경우

/*

let{id, ...rest} = user3;
이렇게 하면 됨.

console.log(id); //guest
console.log(rest.pw); 이렇게 접근 가능


*/

