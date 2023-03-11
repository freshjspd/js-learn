class User{
    constructor(login, password){
        this._login = login;
        this._password = password;
    }
    set login(value){
        this._login = value;
    }
    get login(){
        return this._login;
    }
    set password(value){
        this._password = value;
    }
    get password(){
        return this._password;
    }
    updatePassword(value){
        this.password = value;
    }
    out(){
        console.log(`Login: ${this.login} Password: ${this.password}`);
    }
};

class Worker extends User{
    constructor(salary, job, auth={login:'user', password:'user'}) {
        super(auth.login, auth.password);
        this.salary = salary;
        this.job = job;        
    }
    calc12Salaries(){
        return this.salary*12;
    }
}

const worker1 = new Worker(10000, 'dev', {login: 'vasya', password: 'qwerty'});
console.log(worker1.calc12Salaries());
worker1.out();
worker1.updatePassword('admin');
worker1.out();



//class Worker  - salary, job
// extends User
// method: подсчитать зарплату на год

//*** */
// _ User сделть слубжебными поля логина и пароля
// создать метод который обновляет пароль


