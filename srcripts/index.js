let a = [3,10,20,30,40,50], result; 

/*
//1
console.log('-----------');
a.forEach( el => console.log(el));
//2
console.log('-----------');
a.forEach( (el, i) => console.log(el, ':', i));
//3
console.log('-----------');
function out(el, i, arr){
    console.log(i,el);
}

a.forEach(out);
*/

// умножить элементы массива на 2
//forEach
a.forEach(el => console.log(el*2));
console.log(a);
//map
result = a.map(el => el*2);
console.log(result);

//ищем четные элементы массива
//find
result = a.find(el => (el%2 == 0));
console.log(result);
//filter
result = a.filter(el => (el%2 == 0));
console.log(result);
//findIndex
result = a.findIndex(el => (el%2 == 0));
console.log(result);



//проверить положительные ли элементы массива 
//some
console.log( a.some(el => el>0) );
//every
console.log( a.every(el => el>0) );


//проверить на четность массив

//1 variant
result = a.every(el => el%2 == 0);
// 2 variant

result = a.every(isEven);

function isEven(el, i, arr){
    return (el%2 == 0) ? true : false;
}

// concat
console.log([1,2,3].concat([-1,-2,-3,-4]));
// join
console.log([192,156,34,12].join('.'));
console.log(['S123A','1045','D2300','0012'].join('-'));


// sum 
let sum=0;
for(let i=0; i<a.length; i++){
    sum += a[i];
}
console.log(sum);

// new!!!!!
//сумма массива умноженного на 2
result = a.reduce( (summa, el) => summa + el*2);
console.log(result);



let w = ['angel', 'clown', 'mandarin', 'sturgeon', 'x1', 'x2'];
result = w.splice(2, 2, 'hello');
console.log(w);


