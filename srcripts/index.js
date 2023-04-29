'use strict';

const square = document.querySelector('.item');
let deg = 0;
setInterval(foo, 1000/60);

function foo(){
    square.style.transform=`rotate(${deg+=10}deg)`
}

const btn = document.querySelector('button');

btn.onclick = function(){
    alert('Hello!');
}