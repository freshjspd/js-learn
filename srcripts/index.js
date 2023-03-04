// класс родитель
class Client{
    constructor(fullname, tel){
        this.fullname = fullname;
        this.tel = tel;
    }
    printPersonalInfo(){
        console.log(this.fullname, this.tel);
    }
}

// класс наследника
class User extends Client{
    constructor(login, password, fullname, tel){
        super(fullname, tel); // конструктор родителя
        this.login = login;
        this.password = password;
    }
    printAuth(){
        console.log("login:",this.login,"password:",this.password);
    }
};

let user1 = new User('vasya1', 'qwerty', 'Vasya Vasya', '1928371984');
user1.printPersonalInfo();
user1.printAuth();



class Calc{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    add(){
        return this.x+this.y;
    }
    sub(){
        return this.x+this.y;
    }
    incX(step=1){
        return this.x = this.x + step;
    }
}

let obj = Calc(2,6);
obj.add();
obj.incX();
obj.incX(100);


