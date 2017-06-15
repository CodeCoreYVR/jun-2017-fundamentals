while (true) {
  console.log("Hello!");
}

// infinite do..while loop
// the block of code will execute at least once
do {
  console.log("Hello!");
} while (true);

// 1. ask the user a question
// 2. check if the response is valid
// 3. if it is not valid, ask again

// brute force
// Q. Please pick a number between 1 and 10
// A. 9
// VALID
//
// Q. Please pick a number between 1 and 10
// A. 11
// INVALID
// Q. Please pick a number between 1 and 10
// A. -1
// INVALID
// Q. Please pick a number between 1 and 10
// A. 8
// VALID

while (true) {
  let guess = prompt("Please pick a number between 1 and 10.");
  // pseudo coding - writing it out in plain english
  // 1. does the number they've entered fall between 1 and 10
  //    this determines if it is valid or INVALID

  // && - and
  // || - or
  if (guess <= 10 && guess > 0) {
    // valid
    // stop pestering the user
    break;
  } else {
    // invalid
  }
}

do {
  let guess = prompt("Please pick a number between 1 and 10.");

  if (guess <= 10 && guess > 0) {
    // valid
    // stop pestering the user
    break;
  }
} while (true);

// Exercise - generate a random number between 1 and 10, make sure you round the number, so that it is a whole number (integer).  then make a game where user has to guess the right number. if they guess the right number, prompt with "Congratulations, you guessed the right number:  5"

// stretch - give them hints, it is higher than what you guessed
// it is lower than what you've guessed

// pseudo coding - writing it out in plain english
// writing a recipe

// 1. generate a random number between 1 and 10
//    a. use Math.random(), Math.round()
//    b. Math.random() * UPPER_LIMIT, will give me a number
//       between 0 and the UPPER_LIMIT
//    c. Don't forget to round because Math.random() returns
//       a decimal number

let magicNumber = Math.ceil( Math.random() * 10 );

// 2. Ask the user continually for a number
//    a. if I want to interate using JS, I should use a loop
//    b. a while loop needs an exit condition or else it will
//       run forever
//    c. you can use break; as a parachute to exit out of a while
//       loop at anytime

while(true) {
  let userNumber = prompt("Please enter a number from 1 to 10");

  // exit out of this loop if the number they've entered matches the magic number
  // if (magicNumber >= 1 && magicNumber <= 10) {brbbrbbrbbrbbrbbrbbrbbrbbrbbrbbrbbrbbrbbrbbrbbrbbrbbrbbrbbrbbrbbrbbrbbrbbr
  if (magicNumber == userNumber) {
    // alert("Congratulations! You guessed the number: " + magicNumber)
    alert(`Congratulations! You guessed the number: ${magicNumber}brbbrbbrbbrbbrbbrbbrbbrbbrbbrbbrbbrbbrbbrbbrbbr`);
    break;
  } else {
    // the user got it wrong, please give them a hint
    if (magicNumber > userNumber) {
      alert("too low");
    }
    else {
      alert("too high");
    }
  }
}

// 3.  Check to see if the user guessed the right number
//     a. >, <, >=, <=, == can be used to check equivalency or
//        conditions
//     b. if the guess is equal to the random number that was
//        rounded, we can pull the parachute.
//     c. if the guess was not right, we should keep pestering
//        the user to enter another guess










//
