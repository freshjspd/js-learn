function helloFun(userName) {
  const helloMsg = "Hello, " + userName + "!!";
  alert(helloMsg);
}

const user = prompt("Enter your name");
helloFun(user);

function sum(a, b) {
  const result = a + b;
  return result;
}

let result;
result = sum(2, 2);
console.log(result);
result = sum(10, 20);
console.log(result);

console.log( sum(100, 50));
