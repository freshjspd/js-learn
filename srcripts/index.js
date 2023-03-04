let users = [];

class User{
    constructor(nameValue="anov", surnameValue = "anov"){
        this.name = nameValue;
        this.surname = surnameValue;
    }
    /*
    constructor(name, surname){
        this.name = name;
        this.surname = surname;
    }
    */
};

let user1 = new User("Tom", "Fox");
console.log(user1);
let user2 = new User("Ann", "Smith");
console.log(user2);

for(let i=0; i<20; i++){
    users[i] = new User(`name${i}`, `surname${i}`);
}

const user3 = new User();
console.log(user3);


class Car{
    constructor(color, year, model, engineCapacity){
        this.color = color;
        this.year = year;
        this.model = model;
        this.engineCapacity = engineCapacity;
    }
    printObject(){
        // this - весь текущий обьект
        console.log(this);
    }
}

let car1 = new Car("Gray", 2004, "Skoda", "Octavia", 2.0)
car1.printObject();


/*
class Rect{
    constructor(a,b){
        this.a = a;
        this.b = b;
    }
    calcSquare(){
        return this.a * this.b;
    }
}

let r1 = new Rect(20,4);
console.log( r1.calcSquare());
*/

class Rect{
    constructor(a,b){
        this.a = a;
        this.b = b;
        //this.square = 0;
    }
    calcSquare(){
        this.square = this.a * this.b;
        return this.square;
    }
    outSquare(){
        console.log(this.square);
    }
}

let r1 = new Rect(20,4);
r1.calcSquare();
r1.outSquare();

