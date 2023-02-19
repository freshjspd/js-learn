/*
1. Определите переменные со значениями 100, 2.5, false, "Hello, java script!" и выведите их в консоль
2. Создайте переменные greeting со значением'Hi, ' и userName. Спросите имя пользователя и занесите данное значение в переменную userName. С помощью диалога выведите сообщение с приветствием. Например, 'Hi, Vasya!'.
3. Выведите числа от 10 до 50, которые кратны 5
4. Спросите у пользователя номер месяца (это будет число из интервала от 1 до 12) . Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).
5. Подсчитайте сумму четных чисел от 1 до 100

Дополнительные:
6. Вывести знак * столько раз сколько задаст пользователь
7. делить число 1000 на 2 до тех пор, пока не получится число меньше 50. Какое число получилось? сколько раз делили?
8. вывести таблицу значений для функции y = 5x + 2 для значения х от -1 до 1 с шагом 0.1. Вывод вида:
x = -1 , y = -3
x = -0.9, y = -2.5
....
x = 1, y = 7
*/

// task1
let x1 = 100, x2 = 2.5, x3 = false, x4="Hello, java script!";
console.log(x1,x2,x3,x4);

//task2
const userName = prompt('Enter your name:');
const greeting = "Hello, " + userName + "!!!";
alert(greeting);

//task3
let i;
for(i=10; i<=50; i=i+5){
    console.log(i);
}

i=10;
while(i<=50){
    console.log(i);
    i=i+5;
}
//task4
let sum = 0;
for(i=1; i<=100; i++){
    if(i%2 == 0){
        sum = sum + i;
    }
}
console.log(sum);

sum = 0;
for(i=2; i<=100; i=i+2){
    sum = sum + i;
}
console.log(sum);


sum = 0;
i = 1;
while(i<=100){
    if(i%2 == 0){
        sum = sum + i;
    }
    i++;
}
console.log(sum);


// task4
let numberMonth = prompt('Enter a number month');
if(numberMonth >= 3 && numberMonth <= 5){
    alert('spring');
} else if(numberMonth >=6 && numberMonth <=8){
    alert('summer');
} else if(numberMonth >=9 && numberMonth <= 11){
    alert('osen');
} else{
    alert('winter');
}

// task6
const n = prompt('Enter count for *');
for(i=1; i<=n; i++){
    console.log('*');
}

// task7
let hungred = 1000, k = 0;
while (hungred >= 50) {
  hungred /= 2;
  k++;
}
console.log(`Залишилось - ${hungred}; Кількість разів ділення - ${k}`);


// tasl8
let x ,y;
for(x = -1; x <=1; x = x + 0.1){
    y = 5 * x + 2;
    console.log(x,y);
}

