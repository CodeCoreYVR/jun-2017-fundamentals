// data structures
let name = 'Jacob';
let age = 38;


// array - indexed list of information
let names = ["Jacob", "Jesse"];

// 0: "Jacob"
// 1: "Tran"
names[0]; // "Jacob"
names[1]; // "Jacob"

// list, first item on my list
// last item on my list

// multi-dimensional array
let tictactoe = [row1, row2, row3];
// number, string, boolean, null
let row1 = [null, null, null];
let row2 = [null, null, null];
let row3 = [null, null, null];

let tictactoe = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

// array that contains arrays

//
tictactoe[row][col];

tictactoe[0]; // [null, null, null]
tictactoe[1]; // [null, null, null]
tictactoe[2]; // [null, null, null]

// this will return an array: one dimensional array
tictactoe[0];

// getting information
tictactoe[row][col];

// bingo
// excel spreadsheets
// google sheets
// battleship
//

// setting information
let names = ["Jacob", "Jesse"];
// array method - add an item to the end of the array
names.push("Max"); // ["Jacob", "Jesse", "Max"]
names[3] = "Tam"; // ["Jacob", "Jesse", "Max", "Tam"]
names[5] = "Steve"; // ["Jacob", "Jesse", "Max", "Tam", undefined, "Steve"]

//
tictactoe[1][1] = "X";

// [null, null, null],
// [null, "X", null],
// [null, null, null]


// objects - the fundamental building blocks of code. the basis of anything meaningful in programming
const human = new Object(); // constructing an new object

const human = {
  hairColour: "black",
  eyeColour: "brown",
  height: 168,
  weight: 140,
  hobbies: ["rock climbing", "sing", "dance"],
  dog: {
    name: "Summer",
    age: 2
  }
};

// get the properties of our objects
human.height; // 168
human.weight; // 140

human["weight"]; // 140
human["height"]; // 168

let propertySearch = 'height';
human[propertySearch]; // 168

// how do i find out the name of my dog?
human.dog; // object
human.dog.name; // "Summer"
// {
//   name: "Summer",
//   age: 2
// }

// iterators
// how we step through an array
// for (let element of array) {
// }
let shoppingList = ["apples", "oranges", "pears"];

for (let item of shoppingList) {
  console.log(item);
}

for (let i=0; i<shoppingList.length; i++) {
  console.log(shoppingList[i]);
}

// how we step through an object
// for (let property in object) {
// }

const human = {
  name: "Jacob",
  age: 38,
  weight: 140
};

for (let property in human) {
  console.log(property); // "weight"
  // human.name
  // human["name"]

  // let property = "name";
  human["weight"]; // returns the value associated with that property
}


// functions & methods
// function stands on it's own
// method belongs to an object or class...

// function - a set of instructions that you may want to repeat

function morning() {
  console.log("get up");
  console.log("brush your teeth");
  console.log("get changed");
  console.log("catch the bus");
}

// monday
morning();
// tuesday
morning();
// wednesday
morning();

// mathematics
// operations that you want to run over and over again
function add() {
  console.log(1 + 1);
}
add();
add();
add();
add();

// arguments, pass these into the function
function add(number1, number2) {
  console.log(number1 + number2);
}

add(5, 6); // this function takes in 2 arguments, a 5 and a 6.  inside the function those two numbers get added together and then logged to our javascript console
add(10, 2);

function add(number1, number2) {
  return number1 + number2;
}

add(5, 6); // this is a function that takes in 2 args, a 5 and a 6. inside the funciton those 2 numbers get added together and returned.

add(5, 6) + add(10, 2);
// 11 + 12; // 23

console.log( add(5, 6) ); // this will print out to the console the return value of the function
console.log( add(5, 6) ); // this will print out to the console "11" the return value of the function

console.log( add(5, 6) + add(10, 2) ); // this will print out to the console "23"

// ---

function add(number1, number2) {
  return number1 + number2;
}

// simple recursion
add( add(1,2), add(3,4) );
add(     3,        7 ); // 10


// ---










//
