let user = {
    name: 'Nike',
    surname: 'Adson',
    age: 20,
    isMale: true,
    hello: function(){ console.log("Hello!");},
    hello2(){
        console.log("Hello!!!!!!!!!!!");
    },
    greeting: function(){
        console.log("Hello! I am ", this.name, this.surname, '!');
    },
    incAge: function(){
        this.age++;
    },
    hiFriend: function(friend){
        console.log(`Hello, ${friend} !`);
    }

};

console.log(user.name, user.surname);
user.hello();
user.hello2();
user.greeting();
user.hiFriend('Ann');
user.hiFriend({name: 'Tom', surname: 'Fox'});

delete user.hello2;