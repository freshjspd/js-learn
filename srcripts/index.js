const promise1 = new Promise(fun1);

//resolve - да!, reject - нет
function fun1(resolve, reject){
    console.log('I am running!');
}

const promise2 = new Promise(getNumBiggerThan5);

function getNumBiggerThan5(resolve, reject){
    const x = Math.random() * 10;
    console.log('Number is ',x);
    if(x >= 5) {
        resolve(x);
    } else{
        const e = new Error(`Reject promise. Number=${x}`);
        reject(e);
    }
}


