const car = {
  make: "Telsa",
  model: "Model 3",
  year: 2018,
  capacity: 5,
  speed: 140,

  park() { console.log("Parking!!!") },
  // what this refers to is:  a question - where am i?  which object am i in
  drive() { console.log(`I am driving ${ this.speed } km/h`) },

  stop() {
    // isNaN(this.speed) == true // it is not a number
    // isNaN(this.speed) == false // it is a number

    // isNumeric(this.speed) == true // it is a number
    // isNumeric(this.speed) == false // it is not a number

    if ( isNaN(this.speed) == false ) {
      if (this.speed > 120) {
        let ees = "";

        for (let i=0; i<this.speed; i++) {
          ees += "e";
        }
        console.log(`Scr ${ ees } tch!!!`);
      } else if (this.speed > 80) {
        console.log("RRRRccch!");
      } else if (this.speed > 10) {
        console.log("sh")
      } else {
        console.log("Yikes! I don't know how fast I'm going!!!");
      }
    }
  }
};

car.speed = 121;
car.stop(); // fast test

car.speed = 81;
car.stop(); // med test

car.speed = 41;
car.stop(); // slow test

car.speed = 240;
car.stop(); // default condition test


// console.log( car.speed ); // 120
// car.park();
// let result = car.stop();
// console.log( car.stop() );
// window.alert( car.stop() );
// document.write( car.stop() );
tesla.drive();
