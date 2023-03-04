class User{
    #login;
    #password;
    constructor(login, password, fullName="anov"){
        this.#login = login;
        this.#password = password;
        this.fullName = fullName;
    }
    set login(value){
        this.login = value;
    }
    set password(value){
        this.password = value;
    }
    get login(){
        return this.login;
    }
    get password(){
        return this.password;
    }
}

class User2{
    constructor(login, password, fullName="anov"){
        this._login = login;
        this._password = password;
        this.fullName = fullName;
    }
    set login(value){
        this._login = value;
    }
    set password(value){
        this._password = value;
    }
    get login(){
        return this._login;
    }
    get password(){
        return this._password;
    }
}

let user1 = new User("tom123", "qwerty");
console.log(user1);


