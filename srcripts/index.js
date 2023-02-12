/*
for (начало; условие; шаг) {
  // ... тело цикла ...
}
*/

// * 5

let n;

for(n=1; n<=5; n++){
    console.log('*');
}

// 1 .... 10 
for(let i=1; i<=10; i++){
    console.log(i);
}

// 1 .... 10  нечетные
for(let i=1; i<=10; i = i+2){
    console.log(i);
}

// 10 .... 1
for(let i=10; i >=1; i--){
    console.log(i);
}