// use logic gating:
// determine if a car is "Future", "New", "Old", "Classic"

// let year = 2017;
//
// if (year > 2017) {
//   console.log("Future");
// } else if (year > 2014) {
//   console.log("New");
// } else if (year > 2005) {
//   console.log("Old");
// } else {
//   console.log("Classic");
// }

// browser interactions
// alert
// prompt
// confirm

// boolean - true or false
// if (true) {
//   // run some code
// }
let ageCheck = confirm("Are you old enough to drive?");
// >, <, >=, <=, ==
if (ageCheck == true) {
  let year = prompt("What year is your car?");

  if (year > 2017) {
    alert("Future");
  } else if (year > 2014) {
    alert("New");
  } else if (year > 2005) {
    alert("Old");
  } else {
    alert("Classic");
  }
}

// reversed
let year = prompt("What year is your car?");

if (year < 1970) {
  alert("Classic");
} else if (year < 1990) {
  alert("Old");
} else if (year < 2015)brbbrbbrbbrbbrbbrbbrbbrbbrb {
  alert("New");
} else {
  alert("Future");
}






//
