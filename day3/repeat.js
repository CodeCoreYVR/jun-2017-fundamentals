// repeat function
// "99 bottles of beer" please repeat this song lyric 10 times.

console.log("99 bottles of beer");
console.log("99 bottles of beer");
console.log("99 bottles of beer");
console.log("99 bottles of beer");
console.log("99 bottles of beer");
console.log("99 bottles of beer");
console.log("99 bottles of beer");
console.log("99 bottles of beer");
console.log("99 bottles of beer");
console.log("99 bottles of beer");

for (let i=0; i<10; i++) {
  console.log("99 bottles of beer");
}

let counter = 0;

while (counter < 10) {
  console.log("99 bottles of beer");
  counter++;
}

// function
let lyric = " Bottles of Beer";
repeat(lyric, 99);

function repeat(msg, number) {
  let counter = 0;

  while (counter < number)
  {
    // console.log(counter + msg);
    console.log(`${counter} ${msg}`);
    counter++;
  }
}

// call a function within a function - recursion


//
