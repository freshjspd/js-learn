console.log('1:' , sum1(2,2));
// console.log('2:' , sum2(2,2)); !!!Error

function sum1(a,b){
    return a+b;
}

let sum2 = function(a,b){
    return a+b;
}


console.log('-------------------');
console.log('1:' , sum1(2,2));
console.log('2:' , sum2(2,2));

// стрелочные функцию
let sum3 = (a,b) => a+b;

let sum4 = (a,b) => {
    let result = a+b;
    return result;
}

console.log('3:' , sum3(2,2));
console.log('4:' , sum4(2,2));


/*
easy calc with array functions
*/

const sum = (a,b) => a+b;
const sub = (a,b) => a-b;
const divi = (a,b) => a/b;
const mult = (a,b) => a*b;


let x1 = Number(prompt('Enter 1 value'));
let x2 = Number(prompt('Enter 2 value'));
console.log( sum(x1,x2));
console.log( sub(x1,x2));
console.log( divi(x1,x2));
console.log( mult(x1,x2));