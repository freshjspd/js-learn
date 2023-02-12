/*
if(условие){
    // code
} else{
    // code если условие не выполнилось
}

операторы сравления  >   <   >=   <=   ==   !=
*/

// просим ввести число и узнать больше оно 10

/*
let x;
x = prompt('Enter value x');
x = Number(x);

if(isNaN(x)== false){

    if(x >= 10){
        console.log('Yes. X >= 10');
    } else{
        console.log('No. X < 10');
    }

} else{
    console.log('Ошибка. Введенное значение не число');
}
*/

/*
    if(условие1){
        //code при выполнение условия1
    } else if(условие2){
        //code при выполнение условия2
    } else if(условие3){
        //code при выполнение условия3
    } else{
        // code если ни одно условие не было выполнено
    }
*/
/*

// задача. просим ввести число и узнать больше оно 10 или 100

if(x < 10){
    console.log('x<10');
} else if (x > 100){
    console.log('x>100');
} else{
    console.log('x в диапазоне от 10 до 100')
}

// task. Пользователь вводит число минут. определить в
//какую четверть часа мы попали
let valMinutes = prompt('Введите количество минут');
if(valMinutes <= 15){
    console.log('1 part of hour');
} else if(valMinutes <= 30){
    console.log('2 part of hour');
} else if(valMinutes <= 45){
    console.log('3 part of hour');
} else {
    console.log('4 part of hour');
}

// task. пользователь вводит номер времени года (1 - зима, 2 -весна, 3 - лето, 4 - осень)
// вывести название времени года по числу
let numMo = prompt('Введете номер времени года');
if(numMo == 1){
    console.log("It's winter");
} else if(numMo == 2){
    console.log("It's spring");
} else if(numMo == 3){
    console.log("It's summer");
} else if(numMo == 4){
    console.log("It's autumn");
} else{
    console.log("Error");
}

// task. пользователь вводит возраст. проверить совершеннолетний ли он?
let userAge = prompt('Ваш возраст?');
if(userAge >= 18) {
    console.log('совершеннолетний');
} else{
    console.log('несовершеннолетний');
}


// проверить пользователя знает ли он сколько будет 1+1
let answerUser = prompt('1+1=????');
let answerComp = 2;
if(answerUser == answerComp) {
    console.log('You are right! Bingo!)');
} else{
    console.log('Sorry. 1+1=2 !');
}


*/
// товар стоит 120 грн. пользователь покупает определенное количество штук
// подсчитать стоимость покупки
// скидку 3% если сумма больше 700 грн
// суидку 5% если сумма больше 1000 грн

let productPrice = 120;
let productCount = Number(prompt('Введите количество товара',1));
let sum;
let sale = 0;
sum = productPrice * productCount;
if(sum >= 1000) {
    sale = 5;
    sum = sum * (100 - sale)/100;
} else if(sum >= 700){
    sale = 3;
    sum = sum * (100 - sale)/100;
}
console.log('Сумма к оплате ', sum, 'грн. скидка:', sale, '%');







