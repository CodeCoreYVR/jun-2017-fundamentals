const human = {
  eyeColour: "brown",
  hairColour: "black",
  name: "Jacob",
  age: 38,
  height: 168,
  weight: 140,
  // hobby: "BJJ"
  hobbies: ["BJJ", "Rock Climbing", "Drinking"]
};

human.hobbies; // an array
// loop through the array
for (let hobby of human.hobbies) {
  console.log(hobby)
}

// loop through the object and the array
// for in
for (let property in human) {
  console.log(property); // this will return the current property

  // is_a? Array - ruby
  if (Array.isArray(human[property])) {
    // for (let hobby of hobbies)
    for (let element of human[property]) {
      console.log(element);
    }
  } else {
    console.log(human[property]); // this will return the value associated with that property
  }
}

// baby inside their mom




//
