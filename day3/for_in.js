// to loop through an object we use the for..in syntax
let human = {
  eyeColour: "brown",
  hairColour: "black",
  name: "Jacob",
  age: 38,
  height: 168,
  weight: 140,
  hobby: "BJJ"
};

// the for..in loop allows us to cycle through all the properties of an object
for (let property in human) {
  console.log(property); // property
  console.log(human[property]); // value
  // this will express itself as the following the first time through
  // human["eyeColour"]
}

//
let me = {
  name: "Jacob",
  age: 38
}

me.name; // "Jacob" dot operator
me["name"]; // "Jacob" searching by string

let property = "name";
me[property]; // "Jacob" evaluating a variable



//
