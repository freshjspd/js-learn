//tasks

// 1 соединить две строки в одну и результат перевернуть
let str1, str2;
let a1 = str1.split(' '), a2 = str2.split(' ');
//let result = str1.split(' ').concat(str2.split(' ')).reverse().join(' ');
let result = a1.concat(a2).reverse().join(' ');

// 2 проверить является ли слово полиндромом
// abcdeffedcba

function pal(word){
    return word == word.split('').reverse().join('') ? true : false;
}

// 3* функцию которая преобразует 1-ю букву каждого слова в верхний регистр

let str;
result = str.split(' ').map(el => el[0].toUpperCase()+ el.substring(1)).join(' ');
