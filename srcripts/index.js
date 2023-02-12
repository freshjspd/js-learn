/*
for (начало; условие; шаг) {
  // ... тело цикла ...
}
*/

// * 5

let n;

for(n=1; n<=5; n++){
    console.log('*');
}

// 1 .... 10 
for(let i=1; i<=10; i++){
    console.log(i);
}

// 1 .... 10  нечетные
for(let i=1; i<=10; i = i+2){
    console.log(i);
}

// 10 .... 1
for(let i=10; i >=1; i--){
    console.log(i);
}

// task1
// вывести таблицу умножения на 4
let res , i;

for(i=1; i<=10; i++){
    res = 4 * i;
    console.log('4 * ', i, '=', res);
}

i = 1;
while(i <= 10){
    res = 4 * i;
    console.log('4 * ', i, '=', res);
    i++;
}


// task2
// найти произведение чисел от limit1 до limit2
let limit1 = 2, limit2 = 5;


res = 1;
for(i=limit1; i<=limit2; i++){
    res = res * i;
}
console.log(res);



res = 1;
i=limit1;
while(i<=limit2){
    res = res * i;
    i++;
}
console.log(res);

