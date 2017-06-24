// take each number in the array, multiply it by itself
// build a new array pushing in the result


let numbers = [1,2,3];
// this will hold the result of the mapping
let results = [];

for (let number of numbers) {
  // we square the current number
  let result = number * number;
  // and store it in our results array
  results.push(result);
}

// [1,4,9]
console.log( results );



// function
let squareArray = function( arr ) {
  let results = [];

  for (let elm of arr) {
    let result = elm ** 2;
    results.push(result);
  }

  return results;
}

squareArray([1,2,3]); // [1,4,9]


// higher-order function
let square = function( number ) {
  return number ** 2;
};
let addOne = function( number ) {
  return number + 1;
};

square(7); // 49

let map = function( fn, arr ) {
  let results = [];

  for (let elm of arr) {
    let result = fn( elm );
    results.push( result );
  }

  return results;
};

map(square, [1,2,3]); // [1,4,9]
map(addOne, [1,2,3]); // [2,3,4]











//
