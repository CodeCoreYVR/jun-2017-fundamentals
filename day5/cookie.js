p// make a cookie object with sugar and flour attributes
// create a bake, eat method for this cookie

// use the keyword this to print out the amount of sugar when we eat or bake
const cookie = {
  sugar: 15,
  flour: 20,
  bake() { return `I am baking a cookie with ${ this.sugar } grams of sugar` },
  eat() { return `I am eating a cookie with ${ this.flour } grams of flour` }
};

const oreo = {
  sugar: 30,
  flour: 20,
  fillingType: "vaanilla",
  bake() { return `I am baking a cookie with ${ this.sugar } grams of sugar` },
  eat() { return `I am eating a cookie with ${ this.flour } grams of flour` }
};

const oatmeal = {
  sugar: 5,
  flour: 20,
  bake() { return `I am baking a cookie with ${ this.sugar } grams of sugar` },
  eat() { return `I am eating a cookie with ${ this.flour } grams of flour` }
}

// test out your cookie's methods
let result = bake();
window.alert( eat() );
