p// classification
// classes
// hierachy of the evolution tree
// class - it describes an object

// blue print -> house
// cookie cutter -> cookie
// pepper shaker -> pepper
class Cookie {
  // in our object
  // sugar: 10;

  constructor(sugar, flour) {
    // instance variables
    this.sugar = sugar;
    this.flour = flour;
  }
}

// constructing an instance of a class
// making an oreo object
let oreo = new Cookie(30, 20); // the constructor method gets called when we use the new keyword
let oatmeal = new Cookie(5, 20);
let chocolateChip = new Cookie(45, 20);

// array & object
class Array {
}
let shoppingList = new Array();

class Object {
}
let human = new Object();
