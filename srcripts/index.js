class Engine{
    constructor(name, power){
        this.name = name;
        this.power = power;
    }
}
class Car{
    constructor(color, year, model, engine){
        this.color = color;
        this.year = year;
        this.model = model;
        this.engine = engine;
    }
}


let engine1 = new Engine('enXXX', 2.0);
let car1 = new Car("Gray", 2004, "Skoda", engine1);
console.log(car1);

//let car2 = new Car("Gray", 2004, "Skoda", new Engine('enXXX', 2.0));


