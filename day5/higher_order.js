// higher order functions - a function that takes in a function as an argument,
// or returns a function

// function calc(sum) {
//   sum(3, 4);
// }
//
// function click(fn) {
//   return fn;
// }

let sayHello = function() {
  console.log("Hello!");
};

// i can run say hello 3 times by:
sayHello();
sayHello();
sayHello();

// this is a function that runs sayHello 3 times. this is still not  a higher order function.
let runThree = function() {
  sayHello();
  sayHello();
  sayHello();
}

runThree();

// this is a higher order function b/c it takes in a function as an argument
let runThree = function( fn ) {
  // we trigger the function, or execute the function by using ();
  fn();
  fn();
  fn();
}

// we pass in the variable which has a reference to an anonymous function
runThree( sayHello );







//
