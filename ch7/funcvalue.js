var username = "이창현";
var userPW = '1111';

function account(userid, userPW){
    console.log(userid);
    console.log(userPW);

    var saveid = "이창현";
    var savePW = '1111';

    if (userid == saveid)
    {
        console.log('반갑습니다. '+ userid+ '님')
    }
}
account(username, userPW);

function plus(a, b){
    console.log(a+b)
}

plus(9,7);

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function checkage(age){
    if(age>19){
        return true;
    }
    else {
        return false;
    }
}

rl.question("나이를 입력하세요: ", function(nai){
    if(checkage(nai)){
        console.log('입장을 허가합니다.');
    }
    else{
        console.log('입장을 불허합니다.');
    }
})
