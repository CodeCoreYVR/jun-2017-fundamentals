// what is the definition of an array?

// list of things
// list of variables
// indexed list, cataloged or there is an inherant order to the list

// lets make a list together
// amazon - shopping list, wish list

// wish list on amazon.com
1. apple watch
2. boost-it long board
3. macbook
4. ring
5. jacket
6. sunglasses
7. swim trunks
8. stuffed animal
9. raspberry pi
10. tie

// data persist, to stick around, to save
5 + 5;
let result = 5 + 5;

// one value to one variable
// 0 or 1
let result1 = 10 * 2;
let result2 = 5 / 2;
let result3 = 5 ** 2;

// the array data type allows us to store multiple values in a single variable
let results = new Array();
// Array() has methods
// methods -> it has functions, or functionality beyond the typical variable.
// let name = "Jacob";

// the push function allows us to add items to the end of an array
// variable name + dot + function
results.push(result1);
results.push(result2);
results.push(result3);

console.log(results);
// [20, 2.5, 25]
// an array is represented using the square brackets. they show when the arrays starts and when it ends.  each individual value in the array is separated by a comma. no comma appears after the last value.

// amazon wish list
// let wishList = new Array(); // array constructor
let wishList = []; // array initializer, this creates an empty array
wishList.push("tie");
wishList.push("stuffed animal");
wishList.push("long board");

// i can create an array even faster
let wishList = ["tie", "stuffed animal", "long board"];

// you are free to play with the white space in an array definition
let wishList = [
                  "tie",
                  "stuffed animal",
                  "long board"
                ];

// MDN - JavaScript Arrays documentation to find out more
// add items to the end of an array
push();
// remove an item from the end of the array
pop();
// removes an item from the start of an array
shift();
// adds an item to the start of an array
unshift();

.length // property of the array
wishList.length; // 3, there are 3 items in my array

// to access a specific item in my array
let wishList = []; // not only does this allow me to initialize, set items in my array
let wishList = ["tie", "stuffed animal", "long board"];

wishList[0]; // get items in my array, zero will give me the first item on my list
wishList[1]; // get items in my array, one will give me the second item on my list
wishList[2]; // get items in my array, two will give me the third item on my list

// going to your friends house for the first time.
// i live at 666 satan road
// 662, 664, 668.... 666

// [number] -> address to the information or data on our list
// [index] -> address to the information or data on our list

let wishList = [];
wishList[0]; // will return undefined
wishList[1];
wishList[2];

// we can set a value at a specific address
wishList[0] = "tie";
// ["tie"]
wishList[2] = "long board";
wishList[10] = "apple watch";

let wishList = ["tie", null, null, "long board"];
wishList.push(null);
wishList[0] = null;

// ["tie", undefined, "long board"];

// Array -> data structure, purposeful design
// results
// wishList
// we name our arrays in the plural form
let numbers = [1,2,3,4,5,6];
// the first number is 1
// the last number is 6
let names = ["John", "Jacob", "Jane"];
// the first name is "John"

let products = ["shampoo", "soap", "conditioner"];
// the last product on the list is "conditioner"

let booleans = [true, false, true];
let strings = ["abc", "def", "ghi"];
let numbers = [1,2,3];
let a = "a";
let b = "b";
let c = "c";
let variables = [a, b, c];

const pi = 3.14159;
const tau = 2.23423;
const speedOfLight = 300000;
let constants = [pi, tau, speedOfLight];

// collection of arrays?  arrays inception
let arrays = [[], [], []];

// games - 2 dimensional array
tictactoe // middle square
battleship // B1
bingo // A16
// sudoku //
// crossword puzzles
// grid

// spreadsheet, excel, google sheet - 2 dimensional array
// A1, C32

// surrey street and avenues are numberical
// 200th st and 55th ave

// 1 dimensional array
// what is the first item on my list

// 2 dimensional array
// we provide 2 pieces of information to retrieve the data

let row1 = [null, null, null];
let row2 = [null, null, null];
let row3 = [null, null, null];

let tictactoe = [ row1,
                  row2,
                  row3  ];

let tictactoe = [ ["O", null, null],
                  [null, "X", null],
                  [null, null, null]  ];

// put an x in the middle of my tictactoe

// [null,null,null]
// row2[1] = "X";

// how do i get to row 2 from my tictactoe array?
// [row1, row2, row3]
// tictactoe[1]; // will give me the entire row2
tictactoe[1][1] = "X";
// tictactoe[row][col];
tictactoe[0][0] = "O";

// 1. you only move within the 3 x 3 grid
// 2. you can only move with an X or an O, and you must take turns

// 1. can be solved or validated using logic gating
// if rowBeingPassedIn > row.length
// if 4 <= 3
// the row being passed in must be equal or the less than the number of rows available.

// 2. booleans - solution for whose turn it is. flipping the boolean each time a move is entered  
// xTurn = true;
// xTurn = false;








//
