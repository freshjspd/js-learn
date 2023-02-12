// вывести * 5 раза
/*
let s = '*';
console.log(s);
console.log(s);
console.log(s);
console.log(s);
console.log(s);
*/
/*
while (condition) {
    // код
    // также называемый "телом цикла"
  }
*/

let s = '*';

//1
let count = 100;
while(count > 0){
    console.log(s);
    count--;   // count = count -1
}

//2
let n = 1;
while(n <= 100){
    console.log(s);
    n++;   // count = count + 1
}

// вывести числа от 1 до 10
console.log('вывести числа от 1 до 10');
let val = 1;
while(val <= 10){
    console.log(val);
    val++;   
}

// вывести числа от 10 до 1
console.log('вывести числа от 10 до 1');
val = 10;
while(val > 0){
    console.log(val);
    val--;   
}

// вывести числа от 1 до 10 нечетные
console.log('вывести числа от 1 до 10 нечетные');
val = 1;
while(val <= 10){
    console.log(val);
    val = val + 2;   
}

// сумму чисел от 1 до 10
console.log('вывести сумма чисел  от 1 до 10');
val = 1;
let result = 0;

while(val <= 10){
    result = result + val; // накапливание суммы
    val++;   
}
console.log(result);

// сумму нечетных чисел от 1 до 10
console.log('вывести сумма нечетных чисел  от 1 до 10');
val = 1;
result = 0;

while(val <= 10){
    result = result + val; // накапливание суммы
    val = val + 2;   
}
console.log(result);


// произведение чисел от 1 до 10
console.log('вывести * чисел  от 1 до 10');
val = 1;
result = 1;

while(val <= 10){
    result = result * val; 
    val++;   
}
console.log(result);


// сумму чисел от 50 до 70
console.log('вывести сумма чисел  от 50 до 70');
let limit1 = 50, limit2 = 70, step =1;
val = limit1;
result = 0;

while(val <= limit2){
    result += val; //result = result + val; 
    val += step; //val = val + step;   
}
console.log(result);


let x = 5;
x += 2;  //x = x + 2; 
x -= 2; //x = x - 2;
x *= 2; //x = x * 2;
x /= 2; //x = x / 2;






 