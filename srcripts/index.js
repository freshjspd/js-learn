/*
ООП
class - класс для создания обьекта
сложный/составной/пользовательский тип данных, который описывает обьект,
набора свойств
"станок" / "прибор"
=>
результат : создание обьекта

{
    свойство: значение,
    свойство: значение,
    свойство: значение,
    свойство: значение,
}

{login: "", password: ""};


class Name{
    constructor(params){}
};

constructor - функция которая описывает создание будущих обьектов
параметры - приминив(число, строка, ....), массив, обьект

this - указатель на текущий обьект / указатель на самого себя

*/

class User{
    constructor(login, password){
        this.login = login;
        this.password = password;
    }
    out(){
        console.log(this);
    }
};

/*
const user1 = new User('Vasya', 'admin');
const user2 = new User('superman', 'qwerty');
console.log('user1:', user1);
console.log('user2:', user2);
console.log('--------------------');
user1.out();
user2.out();
*/

class Stud{
    constructor(name, surname, auth){
        this.name = name;
        this.surname = surname;
        this.auth = auth;
    }
};


const user3 = new User('tom111', 'qwerty');
const stud3 = new Stud('Tom', 'Fox', user3);
console.log(user3);
console.log(stud3);