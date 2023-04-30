/*
// task1
// вернуть разрешение промиса через 3 секунды
const promise1 = new Promise(fun1);

function fun1(resolve, reject){
    setTimeout(
        () => {resolve('Done!'); console.log('ok')}, 
        3*1000);
}

// task2
// вернуть результат промиса для функции которая ожидает число

function task2(x){
    if (!Number.isNaN(x)) {
        return new Propmise((resolve, reject) => {
            resolve(x);
    })} else{
        throw new Error('X is not a number');
    }
}
*/
//task3
// вывести числа от 1 до 10 через 1/2 сек
let limit1 = 1, limit2 = 10, time = 1000;

//1
for(let i=limit1; i<=limit2; i++){
    setTimeout(() => {console.log(i);}, time);
}

//2
const timeId = setInterval(() => {
    limit1 <= limit2 ? 
    console.log(limit1++):
    clearInterval(timeId)
}, time);

