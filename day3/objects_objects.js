// baby inside their mommy

// snake_case
// objects_obects.js
//
// // camelCase
// objectsObjects.js

// array 1 dimensional
let list = [1, 2, 3];

// array 2 dimensional
let tictactoe = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

// object - mom & baby
const mom = {
  name: "Julia",
  weight: 120,
  cravings: ["pickles", "peanut butter", "root beer"],
  baby: {
    name: "Junior",
    age: -3,
    weight: 3
  }
};

// JavaScript Object Notation - JSON
// for in to loop through an object

for (let property in mom) {
  console.log(property); // property name
  console.log(mom[property]); // corresponding value to that property
  if (Array.isArray(mom[property])) {
    // for of to loop through the array (cravings)
    let tempArray = mom[property];

    for (let craving of tempArray) {
      console.log(craving)
    }
  } else if (Object.isObject(mom[property])) {
    let tempObj = mom[property];
    // for in to loop through the object (baby)
    for (let property in tempObj) {
      console.log(tempObj[property]);
    }
  } else {
    console.log(mom[property]);
  }
}



//



//





//
