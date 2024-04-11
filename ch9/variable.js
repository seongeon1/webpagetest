// var는 함수단위, let은 중괄호단위를 변수의 범위로갖는다 .
// const 상수는 변경 불가능하다.
function myTest(){
    if(true){
        var v = 100;
        let l = 100;
        const c = 300;
    }
    console.log(v);
    //console.log(l);
    c = 400;
    console.log(c);

} 
myTest();