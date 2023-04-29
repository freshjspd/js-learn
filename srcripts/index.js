// setInterval, setTimeout

function foo(){
    console.log('hello foo');
}

let id = setTimeout(foo, 2*1000);
//setTimeout(foo, 0);

//2
function foo2(name){
    console.log(`Hello, ${name}`);
}

setTimeout(foo2, 3*1000, 'name4');
setTimeout(foo2, 1000, 'name1');
setTimeout(foo2, 0, 'name2');
setTimeout(foo2, 2*1000, 'name3');