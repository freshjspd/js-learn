console.log("Hello, World!!!");

//alert("Hello, Java Script!!");

// однострочный комментарий

/*
многострочный комент
и еще
и еще
*/

/******************** */
// обьявление переменных
let name = "Julia"; // string
let year = 2023; // number
let month = "Feb"; //string
let a = 10,
  b = 20,
  c = 30; // number
let pi = 3.141596; //number
let user1 = "Vasya Testovich",
  user2 = "Masha Fox",
  user3 = "Tom Adson"; // string
let isMale = false; // boolean
let isWeekend = true; // boolean

// вывод переменных
console.log(name);
console.log(year);
console.log(month, year);
console.log("Month is", month, "and year is", year);

console.log("Sum a and b and c is", a + b + c);

// работа с переменными
let x = 100;
x = 1;
x = 0;
x = 9;
console.log(x);
x = "hello";
console.log(x);
x = 200;
console.log(x);
x = "Tom";
x = "John Smith";
console.log(x);

let y = 5,
  y2 = 20;
x = y;
console.log("x=", x, "y=", y);
x = y2;
console.log("x=", x, "y=", y);

// арифм операции
x = 10;
x = 10 + 4 * 5 - 2 + (3 + 4) / 2;
console.log(x);
x = 10;
y = 5;
let result;
result = x + y;
console.log(result);
result = x - y;
console.log(result);
result = x * y;
console.log(result);
result = x / y;
console.log(result);

x = x + 2;
console.log(x);
x = x - 2;
console.log(x);

// инкремент
x = x + 1;
console.log("инкремент", x);
x++;
console.log("инкремент", x);
// декремент
x = x - 1;
console.log("декремент", x);
x--;
console.log("декремент", x);

/* практика

1 Определите переменные со значениями 11, true, "java script", "100" 
и выведите их в консоль
2. Создайте переменные greeting со значением'Hello, ' и userName. 
Напишити имя пользователя в переменную userName. 
С помощью диалога выведите сообщение с приветствием. Например, 'Hello, Vasya!'.
3 Создайте переменные a=10 и b=20. 
Отнимите от a переменную b и результат присвойте переменной c. 
Затем создайте переменную d, присвойте ей значение c. 
Сложите переменные c и d, а результат запишите в переменную result.

*/

// task1
let x1 = 11;
let x2 = true;
let x3 = "java script",
  x4 = "100";
console.log(x1, x2, x3, x4);

// task2
let greeting = "Hello, ";
let userName = "Vasya";
console.log(greeting, userName, "!!!!");
//alert(greeting+userName+"!!!!");

// task3
let varA = 10,
  varB = 20;
let varC = varA - varB;
let varD = varC;
let res;
res = varC + varD;
console.log(varA, varB, varC, varD, res);

/*
task 4. написать программу перевода метры в сантиметры
task 5. подчитать площать прямоугольника (s = a *b)
*/

/*
// task4
let valM = 20;
let valCM;
valCM = valM * 100;
console.log('task4 ',valCM);

// task5
let sizeA, sizeB, square;
sizeA = 10.3;
sizeB = 20.7;
square = sizeA * sizeB;
console.log('task5 ',square);
*/

// tasks with prompt
let test;
test = prompt("Введи значение переменной test");
console.log("Test is ", test);

// task4
let valM = prompt("Введи значение в метрах");
let valCM;
valCM = valM * 100;
console.log("task4 ", valCM, "cm");

// task5
let sizeA, sizeB, square;
sizeA = prompt("Введи значение ширины");;
sizeB = prompt("Введи значение длины");;
square = sizeA * sizeB;
console.log("task5 ", square);
