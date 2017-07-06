p// calculator is a good use case of a higher order function
let add = function(x, y) {
  return x + y;
};

let subtract = function(x, y) {
  return x - y;
};

let multiply = function(x, y) {
  return x * y;
};

let divide = function(x, y) {
  return x / y;
};

// higher order function
let calculator = function( fn, x, y ) {
  return fn( x, y );
};

console.log( calculator(add, 5, 6) ); // 11
console.log( calculator(subtract, 5, 6) ); // -1
console.log( calculator(multiply, 5, 6) ); // 30
console.log( calculator(divide, 5, 6) ); // 0.8333




//
