class Author{
    static countAuthors = 0;
    constructor(name){
        this.name = name;
        Author.countAuthors ++;
    }
}

let author1 = new Author('Nike Adson');
let author2 = new Author('Tom Fox');
let author3 = new Author('John Tomson');
console.log('Total count: ', Author.countAuthors);

class Worker{
    static countPeople = 0;
    static money = [];
    constructor(name, salary){
        this.name = name;
        this.salary = salary;
        Worker.countPeople++;
        Worker.money.push(this.salary);
    }
    static compareTwoSalary(worker1, worker2){
        if(worker1.salary > worker2.salary){
            console.log(`worker ${worker1.name} has tha salary bigger than worker ${worker2.name}`);
        } else{
            console.log(`worker ${worker2.name} has tha salary bigger than worker ${worker1.name}`);
        }
    }
    static totalSumForMonth(){
        for (let i of Worker.money){
            sum += i;
          }
          return sum;
         }
};

let w1 = new Worker('Tom', 10000);
let w2 = new Worker('John', 12000);
let w3 = new Worker('Ann', 10000);
let w4 = new Worker('Nike', 11000);

Worker.compareTwoSalary(w1, w2);
Worker.compareTwoSalary(w3, w4);

