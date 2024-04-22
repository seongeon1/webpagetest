
//resolve는 작업을성공했을 때 호출할 파라미터, reject는 작업을 실패했을 때, 호출함 함수 파라미터이다.
//여기서 작업이란? 

function pro1(){

    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve('pro1 sucess');
        }, 1000);
    });
}

function pro2(){

    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve('pro2 sucess');
        }, 1000);
    });
}



pro1().then(function(result) {
    
    console.log('result1',result);
    pro2().then(function(result){
        console.log('result2',result);
    });

})

/*위의 형태를 개선할 수 있음

pro1()
.then(function(result) {
    console.log('result1',result);
    return pro2();
})
.then(function(result){
    console.log('result2',result);
});

*/

//일반적인 형태는 조건에 따라 resolve와 reject가 분리되어 호출되는 것이 바람직함.

const real = pid =>{
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if(pid === 1){
                resolve('real1 sucess');
            }else if(pid === 2){
                resolve('real2 sucess');
            }else if(pid === 3){
                resolve('real3 sucess');
            }else{
                reject('real error');
            }
        }, 1000);
    });
}
const real2 = ppw =>{
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if(ppw === 1){
                resolve('real2 sucess');
            }else if(ppw === 2){
                resolve('real2 sucess');
            }else if(ppw === 3){
                resolve('real2 sucess');
            }else{
                reject('real2 error');
            }
        }, 1000);
    });
};

const id = 1;
const pw= 3;


real(id)
.then(result => {
    console.log(result);
    return pro2(pw);
})
.then(result => {
    console.log(result);
})
.catch(error => {
    console.log(error);
    return Promise.reject(error);
})
