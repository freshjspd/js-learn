class User{
    constructor(login, password){
        this.login = login;
        this.password = password;
    }
    out(){
        console.log('out method of User class');
        console.log("Login: ", this.login);
    }
    printAuth(){
        console.log(`Auth: ${this.login} ${this.password}`);
    }
};

class Stud extends User{
    constructor(name, surname, login, password){
        // super - вызов конструктора родителя
        super(login, password);
        this.name = name;
        this.surname = surname;
    }
    out(){
        super.out();
        console.log(`personal info: ${this.name} ${this.surname}`);
    }
    printFullname(){
        console.log(`Fullname: ${this.name} ${this.surname}`);
    }
};


const stud1 = new Stud('Tom', 'Fox', 'tom1', 'qwerty');
stud1.printFullname();
stud1.printAuth();
stud1.out();
