/*
tasks

1. Подсчитать сумму по модулю элементов массива
2. Вывести индексы отрицальтелых элементов массива
3. Вывести колиство отрицательных элементов маасива
4. Даны два массива. Обьединить и преобразовать в строку
-----------------------------------------------------
5. Отфильтровать массив удалив все отрицательные элементы
================================================
6. Предложение превратить в название переменной в стиле camel case
"my new variable" => myNewVariable
7. удалить все знаки из предложения (оставить только буквы и цифры
*/
function getRandomArray(maxValue, countArray){
    let arr = new Array(countArray);
    arr.forEach(el => Math.floor(Math.random() * maxValue));
    /*
    let arr = [];
    for(let i=0; i<countArray; i++){
        arr[i] = Math.floor(Math.random() * maxValue);
    }
    */
    console.log(arr);
    return arr;
    
}

function task1(arr){
    let sum =0 ;
    for(let i=0; i<arr.length; i++){
        sum += arr[i];
    }
    return Math.abs(sum);
}

function task2(arr){
    let result = [];
    for(let i =0, j=0 ; i<arr.length; i++){
        if(arr[i] < 0){
            result[j] = i;
            j++;
        }
    }
    return result;
}

function task3(arr){
    let j=0;
    for(let i =0; i<arr.length; i++){
        if(arr[i] < 0){
            j++;
        }
    }
    return j;
}

function task4(arr1, arr2){
    for(let i=0; i < arr2.length; i++){
        arr1.push(arr2[i]);
    }
    return arr1.toString();
}

function task5(arr){
    let result = [];
    for(let i=0, j=0; i<arr.length; i++){
        if(arr[i] < 0) continue;
        result[j] = arr[i];
        j++;
    }
}

let a = [1, 2, -5, 2, 0, -1, -2, 9 , 0, -4, 1];

let res1 = Math.abs(a.reduce((sum, el) => sum + el));

a.forEach(el => (el<0) ? console.log(el) : el );

let res3 = a.reduce((sum, el) => (el<0) ? sum + el : sum);
console.log('task3=',res3);

let res5 = a.filter(el => el>0);

let res5_2 = a.forEach((el, i) => (el <=0 ) ? a.splice(i,1): el);
console.log(a);


let str;
result = str.split(' ').map(el => el[0].toUpperCase()+ el.slice(1)).join();


let res7 = str.split('').forEach(el => (
    el.charCodeAt([0]) >=48 && el.charCodeAt([0])) <=122 
    ? console.log(el) 
    : el
);