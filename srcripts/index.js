// класс родитель
class Client{
    constructor(fullname, tel){
        this.fullname = fullname;
        this.tel = tel;
    }
}

// класс наследника
class User extends Client{
    constructor(login, password, fullname, tel){
        super(fullname, tel); // конструктор родителя
        this.login = login;
        this.password = password;
    }
};

let user1 = new User('vasya1', 'qwerty', 'Vasya Vasya', '1928371984');


