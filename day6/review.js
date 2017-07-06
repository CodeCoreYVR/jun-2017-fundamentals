p// review of saturday

// function - list of instructions. something we want to reuse
function add(x, y) {
  return x + y;
}

add(5, 6); // 11
// show the result to a developer
console.log( add(5, 6) );
// show the result to a user
document.write( add(5, 6) );
window.alert( add(5, 6) );

// object - building blocks of code, basis for object-oriented programming
const human = {
  name: "Jacob",
  age: 38,
  hobbies: ["Juggling", "Coding", "Writing"],
  dog: {
    name: "Summer",
    age: 2
  }
}

// method - when a function is defined in an object (or class) it is considered a method of that object or class

// function declaration
// function flying() {}

// function expression
let flying = function(){
  console.log("I'm flying!");
};

const mario = {
  occupation: "plumber",
  speed: 10,
  // method - the jump methods has the following instructions
  jump: function(height){ console.log(`I'm jumping ${height} pixels!`) },
  fly: flying
};

const luigi = {
  fly: flying
};

// function add(x, y){}

// function(){} - an anonymous function, a function that does not have a name.
mario.occupation; // "plumber"
mario.speed; // 10
mario.jump; // [function]
// ();
mario.jump(50); // call the function itself, execute the function

// keyword: what is "this"?  lexical scope, name spaces, accessor

const tesla = {
  speed: 50,
  capacity: 5,
  model: "Model 3",
  colour: "grey",
  // : function is optional
  drive() {
    // this will tell you the speed
    // what object is calling this method?
    console.log(`I am travelling at ${this.speed}km/h`)
  }
};

tesla.speed;
tesla.capacity;
tesla.drive();

// classes
// we construct an object which is an instance of the array class
let shoppingList = new Array();
const humam = new Object();
// let shoppingList = [];

// blueprints, cookie cutters, pepper shakers
// describe the object
class Cookie {
  // this is the method that is called when the "new" keyword is used
  constructor() { console.log("The cookie is being constructed!") }
  eat() { console.log("I am eating my cookie!") }
  bake() { console.log("I am baking my cookie!") }
}

let oatmeal = new Cookie();
let oreo = new Cookie();
let chocolateChip = new Cookie();

oreo.eat();
oatmeal.bake();

// higher order functions - function that takes in a function as an argument.
// function that returns a function


// // functions are just values
// function ( fn ) {
//   fn();
//
//   return function(){};
// }

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
let calc = function(fn, x, y) {
  return fn(x, y);
};

// calc(add, 3, 4);
// let calc = function(add, 3, 4) {
//   return 7;
// };

calc(add, 3, 4);
// expresses itself as the value of 7
// i want to show my user the answer
document.write( 7 );
document.write( `${ 3 + 4 }` );
document.write( add(3, 4) );
document.write( calc(add, 3, 4) );

calc(subtract, 10, 2);
calc(multiply, 5, 6);
calc(divide, 12, 3);

// mapping
// [1, 2, 3] => you are squaring the numbers => [1, 4, 9]
let square = function(number) {
  return number * number;
  // return number ** 2;
}

square(1); // 1
square(2); // 4
square(3); // 9

let numbers = [1,2,3];
let results = [];

for (let number of numbers) {
  let result = number * number;
  results.push(result);
}

// for (let 3 of numbers) {
//   let 9 = 3 * 3;
//   results.push(9);
// }
// [1, 4, 9]

// higher order function
let mapping = function( fn, arr ) {

  let results = [];
  for (let elm of arr) {
    results.push( fn(elm) );
  }
  return results;
};

let mapping = function( square, [1,2,3] ) {

  let results = [];
  for (let 3 of [1,2,3]) {
    results.push( square(3) );
  }
  // [1,4,9]
  return results;
};

let square = function(number) {
  return number ** 2;
};

let numbers = [1,2,3];
mapping(square, numbers); // [1, 4, 9]

// built in higher order functions in javascript
Math.random();
shopping.length;
tesla.speed;

// timing function
// setTimeout(fn, delay);

// only once
setTimeout(function(){
  console.log("Do homework");
}, 1000);

// it iterates
let counter = 0;

const intervalId = setInterval(function(){
  console.log(counter);
  counter++;

  // this is how to exit out of a setInterval
  if (counter > 10) {
    clearInterval(intervalId);
  }
}, 1000);












//
