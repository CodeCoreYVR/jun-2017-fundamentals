// javascript - a programming language

// interpreted - does not need to be compiled
// how do we run javascript
// repl.it - run javascript in a website
// developer tools - chrome preferred browser
// javascript console
// node - terminal, bash, shell, command line

// higher order function - a function that takes in a function as an argument or returns a function

function higherOrder ( fn ) {
  fn();
}

function higherOrder() {
  return function(){};
}

// functions are values
// function declartion
// function add (x, y) {
//   return x + y;
// }
// function expression
let add = function(x, y){
  return x + y;
};
// let name = "Jacob";

// function declaration
// function calc (fn, x, y) {
//   return fn (x, y);
// }
// function expression
let calc = function(fn, x, y) {
  return fn (x, y);
};

console.log( calc(add, 5, 6) );

// terminal commands
// pwd - where am i?
// cd - change directory
// cd .. - bring you up a directory
// cd "Two Words" - use "" to capture spaces
// ls - list our files/folders in a directory

// finder -> preferences -> sidebar -> check off home
// does node exist?  $ node -v
// node review.js

// timing functions, forEach
// setTimeout(fn, delay);
setTimeout(function(){ console.log("Hello!") }, 3000);
setInterval(function(){ console.log("Happy Canada Day!") }, 4000);

// window is not defined
// alert is not defined
// window.alert("This is a pop-up!");

// document is not defined
document.write("This is some text inside the browser window!");

// when running node, we have no context of a browser.
// some javascript commands that used to work, will now throw errors.

// classes & objects

// OOP - Object Oriented Programming
const puppy = {
  age: 2,
  name: "Summer"
};

// object constructor
const puppy = new Object();

// objects are derived from classes
// classes describe objects, but are not objects themselves
// classes they are ideas, thoughts but not tangible

// a blueprint is a class for a house
// a cookie cutter is a class for a cookie
class Car {
  constructor(model, capacity) {
    this.model = model;
    this.capacity = capacity;
  }
}

// tesla is an objects
// tesla is an instance of the car class
// the car class allows us to construct a car with a unqiue model and capacity
// it does this through a constructor method
// a method is a function within a class
let tesla = new Car("Model 3", 5);

class Array {
  constructor() {
    this.length = 0;
  }
  push (value) {
    // adds it to the end of the array
    this.length++;
  }
}

let shoppingList = new Array();
shoppingList.length;
shoppingList.push("milk");
shoppingList.push("eggs");
shoppingList.push("butter");

// this exercise - increment













//
