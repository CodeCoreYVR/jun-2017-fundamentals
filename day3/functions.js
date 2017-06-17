// functions & methods

// functions - a block of code that we want to reuse
// mathematics
// add, subtract, divide, multiply
// anatomy of a function
// function name(){}

// function add() {}
// function subtract() {}
// function divide() {}
// function multiply() {}

function morning() {
  console.log("brush teeth");
  console.log("eat breakfast");
  console.log("get changed");
  console.log("catch the bus");
}

// monday
// to execute a function, you use the function name with ();
morning();
// tuesday
morning();
// wednesday
morning();

// monday
// console.log("brush teeth");
// console.log("eat breakfast");
// console.log("get changed");
// console.log("catch the bus");
//
// // tuesday
// console.log("brush teeth");
// console.log("eat breakfast");
// console.log("get changed");
// console.log("catch the bus");
//
// // wednesday
// console.log("brush teeth");
// console.log("eat breakfast");
// console.log("get changed");
// console.log("catch the bus");

function add() {
  console.log(3 + 3);
}

add(); // 6
add(); // 6
add(); // 6

function add() {
  return (3 + 3);
}

console.log(add());
console.log(`${add()}`);

add() + add();
6  +  6;

// return if we want functions to express themselves as values

function add(number1, number2) {
  return (number1 + number2);
}

// providing arguments
add(5, 6);
add(6, 3);
add(7, 12);
add(); // error: 2 arguments expected and received none

function subtract(number1, number2) {
  return (number1 - number2);
}
function multiply(number1, number2) {
  return (number1 * number2);
}
function divide(number1, number2) {
  return (number1 / number2);
}


add(5, 6);
subtract(10, 2);
multiply(3, 4);
divide(12, 3);

add(divide(12, 3), subtract(10, 2));
add(divide(multiply(3, 4), add(5, 6)), subtract(10, 2));






//
