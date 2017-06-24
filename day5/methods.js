// methods - procedure
// method acting?
// methodology
// methods model behaviour
// method - a function that exist within an object (or class)
let ducking = function(){
  console.log("I am ducking");
};

const luigi = {
  duck: ducking
}

const mario = {
  image: "mario.png",
  superPower: "firepower",
  health: 3,
  brother: {
    name: "Luigi"
  },
  hobbies: ["plumbing", "save princesses", "eat pizza"],

  // method - my jump property has the value of a function, an anonymous function
  jump: function(height){
    console.log(`I am jumping ${height} feet!!!`);
  },
  duck: ducking,
  // we can get rid of ": function" in the latest version of js
  fly() {
    console.log("I am flying");
  }
};

mario.image; // "mario.png"
mario["superPower"]; // "firepower"
mario.jump; // display function[function]
mario.jump(10);
mario.duck();
mario.fly();
luigi.duck();



//
