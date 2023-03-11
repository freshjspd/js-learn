const user = {
    login: 'anon',
    password: 'admin',
    authData: function(){
        console.log('Auth data:', this.login, this.password);
    } 
};

const stud = {
    fullname: 'Tom Adson'
};

stud.__proto__ = user;

//let stud = Object.create(user);

console.log(stud.fullname);
console.log(stud.login); 
console.log(stud.password);
stud.authData(); 