function greeting(name){
    console.log('Hello, ' , name, "!!!");
}

let users = ['Vasya' , 'Tom', 'Ann', "John"];

for(let i=0; i<users.length; i++){
    greeting(users[i]);
}

//---------------------------------

let array1 = [1,6,2,3,-5,2,3.14, 2,3,10,-4,5];
let n1 = array1.length;

for(i=0; i<array1.length; i=i+2){
    console.log(array1[i]);
}

//sum of array
let sum = 0;
for(i=0; i<array1.length; i++){
    sum = sum + array1[i];
}
console.log('Sum of array is ', sum);
