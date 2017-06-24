// load in my lodash library
// so that i can use a command from that library (function)
// let _ = require('lodash/core'); // backend node

// _.filter(collection, [predicate=_.identity])

let numbers = [1,2,3,4,5];


// for (let i=0; i<numbers.length; i++) {
//   if (numbers[i] % 2 == 0) {
//     numbers.remove(i);
//   }
// }

let results = _.filter(numbers, function(n){
  return n % 2 === 0;
});

console.log( results );

// write filter on your own...

let numbers = [1,2,3,4,5];

let isEven = function(number) {
  return (number % 2 == 0);
};
let isOdd = function(number) {
  return (number % 2 != 0);
};

let filter = function( fn, arr ) {
  // create a placeholder results array to store truthy values
  let results = [];
  // step through each element in my array
  for (let elm of arr) {
    // execute the function passed in, with the current elm as the argument
    // this will result in a true or false value
    if (fn( elm )) {
      // if the filter condition is met, add the elm to the results array
      results.push(elm);
    }
  }
  // return the results array so that when call the higher order function, returns something meaningful
  return results;
};

filter(isEven, numbers);
filter(isEven, [1,2,3,4,5])
// [1,3,5]
