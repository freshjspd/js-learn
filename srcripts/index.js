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




