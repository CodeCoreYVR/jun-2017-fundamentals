// objects - the fundamental building blocks of anything meaningful in programming

let human = new Object();
// describe objects
// properties

// dot operator
human.eyeColour = "brown";
human.hairColour = "black";
human.name = "Jacob";
human.age = 38;
human.height = 168;
human.weight = 140;
human.hobby = "BJJ";

// object initializer
let human = {
  eyeColour: "brown",
  hairColour: "black",
  name: "Jacob",
  age: 38,
  height: 168,
  weight: 140,
  hobby: "BJJ"
};


// list with a description instead of an index
// 0: "tie"
// 1: "long board"
// 2: "apple watch"

// eye_colour: "brown"
// hair_colour: "black"
human.eyeColour;  // brown
human["eyeColour"]; // brown

console.log(human.bloodType);


// loop through an object???? for of???
