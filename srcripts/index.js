let x = 100;
let y = x;
console.log(x,y);
x = 500;
console.log(x,y);

let user1 = {name: 'Vasya'};
let user2 = user1;
console.log(user1,user2);
user1.name = "Tom";
console.log(user1,user2);
user2.name = "Nike";
console.log(user1,user2);

console.log('-----------------');
let user3 = {name: 'Vasya'};
let user4 = Object.assign({}, user3);
console.log(user3, user4);
user3.name = "Tom";
console.log(user3, user4);
user4.name = "Nike";
console.log(user3, user4);
user3.age = 20;
console.log(user3, user4);

console.log('-----------------');
let user5 = {name: 'Vasya'};
let user6 = {age: 20, isMale: true};
let user7 = {};
Object.assign(user7, user5, user6);
console.log(user7);

/*
console.log('-----------------');
let user8 = {name: 'Vasya'};
let user9 = {name: 'Tom', age: 20, isMale: true};
let user10 = {};
Object.assign(user10, user8, user9);
console.log(user10);
*/

console.log('-----------------');
let user8 = {name: 'Vasya'};
let user9 = {name: 'Tom', age: 20, isMale: true};
let user10 = {name: "Bob"};
Object.assign(user10, user8, user9);
console.log(user10);

// копирование с помощью spread оператора / ... / деструктуризации

let user11 = {name: 'Bob', surname: 'Fox'};
let user12 = {...user11};
console.log(user11, user12);
user11.name = 'Tom';
console.log(user11, user12);


let user13 = {...user11, login: 'bobob', password: 'qwerty'};






