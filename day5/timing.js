// forEach a built-in higher order function

// timing functions that are higher order as well

// setTimeout(fn, delay);
// delay comes in the form of milliseconds
// 1000ms = 1sec


// anonymous function
// let x = 2;
// let y = 3;
//
// add(x, y); // 5
// add(2, 3); // 5

setTimeout(function(){ console.log("blue!") }, 3000); // steak - blue
setTimeout(function(){ console.log("rare!") }, 6000); // steak - rare
setTimeout(function(){ console.log("medium!") }, 9000); // steak - medium

setTimeout(function() {
  console.log("blue!");
  setTimeout(function() {
    console.log("rare!");
    setTimeout(function(){
      console.log("medium!");
    }, 3000);
  }, 3000);
}, 3000); // steak - blue


// being registered in the event loop
//

// function sayHello() {
//
// }


// continues to execute after x number of milliseconds
let counter = 0;

let intervalId = setInterval( function() {

  console.log(`Hi: ${ counter }`);
  counter++;

  if (counter > 10) {
    clearInterval(intervalId);
  }

}, 1000);


// exercise
console.log("Loading...");
setTimeout(function(){ console.log("Hello World!") }, 3000);


setTimeout(function(){ console.log("Ready...") }, 1000); // seabiscuit - gold
setTimeout(function(){ console.log("Set...") }, 2000); // black stallion - silver
setTimeout(function(){ console.log("Go...") }, 3000); // broken pony - bronze


setTimeout(function(){
  console.log("Ready...");
  setTimeout(function(){
    console.log("Set...");
    setTimeout(function(){
      console.log("Go...");
    }, 1000);
  }, 1000);
}, 1000);




//
