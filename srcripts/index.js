// деструктуризация массивов
const arr = ["val1", "val2", "val3", "val4", "val5"];
const arr0 = arr[0];
const arr1 = arr[1];
//const [a0, a1] = arr;
//const [a0, a1,,a3] = arr;
//const [a0, ...rest] = arr;
const[a0,,a2,...rest] = arr; //a0-val1, a2-val3, rest - [val4,val5]

const arr2 = ["v1", [10,20,30,40,50], "v2", "v3", "v4", "v5"];

//const [,result] = arr2;
//console.log(result);

const[,[,,result]] = arr2;

// деструктуризация обьектов

const user = {
    name: 'Vasya',
    surname: 'Test',
    car: {
        model: 'modelX',
        color: 'black',
        year: 2020,
        engine: {
            power: 2,
            year: 2019
        }
    }
};

//user.name;

const {name} = user;
console.log(name);
const {firstName, lastName} = user;
console.log(firstName, lastName);

//const {car:{engine: power}} = user;
const {car: model} = user;


const obj1 = {
    name: 'Tom',
    surname: 'Adson'
};

const obj2 = {
    name: 'Nike',
    age: 20,
}

const Tom = {
    ...obj1,
    ...obj2
};


class User{
    constructor(login, password){
        this.login = login;
        this.password = password;
    }
};

class Stud extends User{
    constructor(name, surname, auth){
        const {login, password} = auth;
        super(login, password);
        this.name = name;
        this.surname = surname;
    }
};


const stud1 = new Stud('Tom', 'Fox', {login:'tom1', password:'qwerty'});





