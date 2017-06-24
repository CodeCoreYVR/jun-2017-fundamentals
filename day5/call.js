// make a higher order function "call" that takes in 2 arguments
// it takes in a fn and a number

let addOne = function(number){
  return number + 1;
};

addOne(10); // 11

let doubleIt = function(number) {
  return number * 2;
};

doubleIt(10); // 20

// higher order function

let call = function( fn, number ) {
  return fn( number );
};


// test case
call(addOne, 5); // 6
call(doubleIt, 5); // 10
