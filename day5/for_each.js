// for each element in our array do something
let addOne = function(number) {
  return number + 1;
}

let doubleIt = function(number) {
  return number * 2;
}

// higher order function
let forEach = function( fn, arr ) {
  let results = [];
  for (let elm of arr) {
    let result = fn( elm );
    results.push( result );
  }

  return results;
}

// test case
forEach( addOne, [1,2,3,4,5] ); // [2,3,4,5,6]
forEach( doubleIt, [1,2,3,4,5] ); // [2,4,6,8,10]



let numbers = [1,2,3,4,5];

// forEach is built in higher-order function in javascript
numbers.forEach( myFunction );

// let forEach = ( fn, arr ) {
//   for (let i=0; i<arr.length; i++) {
//     fn ( i, arr[i]);
//   }
// };
//
let myFunction = function( item, index ) {
  console.log(`${index}: ${item}`);
};

// timing functions - a very good example of higher-order functions at work!




//
