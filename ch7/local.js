function account(){
    var savedUser = '이은성';
    console.log('반갑습니다.' + savedUser + '님');
}

account();

//console.log('또 오셨네요'+ savedUser+ '님');

// 전역 변수(global variable)
var globalVariable = "전역 변수";

function exampleFunction(param1) {
    // 지역 변수(local variable)
    var localVariable = "지역 변수";
    
    console.log("전역 변수:", globalVariable);
    console.log("지역 변수:", localVariable);
    console.log("매개 변수:", param1);
}

// 함수 호출
exampleFunction("매개 변수 값");
