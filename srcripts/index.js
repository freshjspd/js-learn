/*
function greeting(name){
    console.log('Hello, ' , name, "!!!");
}

let users = ['Vasya' , 'Tom', 'Ann', "John"];

for(let i=0; i<users.length; i++){
    greeting(users[i]);
}

//---------------------------------

function sumArray(a){
    let sum = 0;
    for(let i=0; i<a.length; i++){
        sum = sum + a[i];
    }
    return sum;
}



let array1 = [-1,6,2,3,-5,2,3.14, 2,3,10,-4,5];
let array2 = [1,2,3,4];
let array3 = [];
console.log('Sum of array1 is ', sumArray(array1));
console.log('Sum of array2 is ', sumArray(array2));
console.log('Sum of array3 is ', sumArray(array3));

// task1 
// функция которая возвращает только положительные элементы массива

function task1(array){
    let res = [], j=0;
    for(let i=0; i<array.length; i++){
        if(array[i] > 0){
            res[j] = array[i];
            j++;
        }
    }
    return res;
}

console.log(task1(array1));

// task2
//сумма четных элементов массива
function sumEvenArray(a){
    let sum = 0;
    for(let i=0; i<a.length; i++){
        (a[i]%2 == 0) ? sum = sum + a[i] : sum;
    }
    return sum;
}

// task3
// слияние двух массивов в один
/*[1,2,3,4] and [10,20,30]  => [1,2,3,4,10,20,30]*/ 
/*
function concatArrays(array1, array2){
    let n1=array1.length;
    let n2=array2.length;
    for(let i=0; i<n2; i++){
        array1[n1 + i] = array2[i];
    }
    return array1;
}

console.log( concatArrays([1,2,3,4], [10,20,30,40,50]));
*/

// сумма двух массивов
function sumArray(array1, array2){
    let res = [];
    for(let i=0; i<array1.length; i++){
        console.log(i, array1[i], array2[i]);
        res[i] = array1[i] + array2[i];
    }
    return res;
}
console.log( sumArray([1,2,3], [10,20,30]));
console.log( sumArray([1,2,3, 4, 5], [10,20,30]));
console.log( sumArray([1,2,3], [10,20,30, 40, 50]));

// удалить нули из массива
function delZerosFromArray(array){
    let res = [], j=0;
    for(i=0; i<array.length; i++){
        if(array[i] == 0) continue;
        res[j] = array[i];
        j++;
    }
    return res;
}



