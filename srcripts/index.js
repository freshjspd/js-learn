/*
let x;
const RED = "#ff0000";
[5, 0, undefined, {}, {name: 'Vasya'}, function(){}, 'hello', true, [1,2,[100,200],3,4], ,,,,0, null]
[1,2,3,4,5]
*/

let user1 = {};
//let user1 = new Object();
console.log(user1);

let user2 = {
    name: "John",
    surname: "Smith",
    age: 20,
    isMale: true
};
console.log(user2);

let user3 = {};
user3.login = 'vasya1111';
user3.password = 'qwerty';
console.log(user3);

let barsik = {
    name: "Barsik",
    age: 3,
    color: "white"
};
console.log("Hello, ", barsik.name);

let userName = "Ann Smith";
let userAge = 20;
let userLogin = "ann777";

let user4 = {userName, userLogin, userAge};
let user5 = {userName, userLogin, userAge, role: "web design"};

let car = {
    model: "modelX",
    year: 2020
};

let user6 = {name: 'Vasya', car};

// оператор ... называется деструктуризация
// раскладываем обьект  / смотрим то что внутри 

let user7 = {...user4, password: 'qwerty', email: 'ann@mail.com'};

let user8 = {
    login: 'tom111',
    password: 'qwerty',
    personal: {
        name: "Tom",
        surname: "Adson",
        address: "UK, London, Main Str., 54/2",
        tel: "23462423000023"
    },
    langs: ["ua", "eng", "es"]
};

console.log("user: ", user8.login);
console.log("personal info: ", user8.personal);
console.log("home address: ", user8.personal.address);
console.log("langs: ", user8.langs);

// добавить должность staff  и рабочий стаж  exp свойства
// добавить обьект машина 
// *добавить в персональной информации дату рождения
// *добавить в языках новый язык
// ** удалить любой язык из массива

user8.exp = 5;
user8.staff = "designer";
user8.car = {};
user8.personal.birthDay = "11.12.1995";
user8.langs.push("Japan");
user8.langs.splice(2,1);
console.log(user8);

user8.car = {
    model: 'modexXXX',
    year: 2022,
    color: 'black',
    engine: {
        year: 2020,
        name: 'zxsew34'
    }
};

/*
user8.car.year
user8.car.engine.year

user8.car.engina.name = "superengine111"

*/


let carTest = {
    "model": "modexXXX",
    "year": 2022,
    "color": 'black'
};

let carTest2 = {
    model: "modexXXX",
    year: 2022,
    color: 'black'
};

// массив обьектов

let users = [
    {name: 'name1', surname: 'surname1'}, 
    {name: 'name2', surname: 'surname2'}, 
    {name: 'name3', surname: 'surname3'}, 
    {name: 'name4', surname: 'surname4'}, 
];

let users2 = [
    user2,
    user3,
    user4,
    user6,
    user8
];
