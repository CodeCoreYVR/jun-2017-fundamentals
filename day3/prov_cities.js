
// provinces and cities
// BC - Vancouver, Burnaby, Richmond
// AB - Edmonton, Calgary, Red Deer
// ON - Toronto, Ottawa, Hamilton



let vancouver = {
  name: "Vancouver",
  population: 603502
};
let burnaby = {
  population: 232000
};
let richmond = {
  population: 217000
};

let bc = {
  name: "BC",
  cities: [vancouver, burnaby, richmond]
};

// produce a report of the cities and their corresponding populations
for (let propertyName in bc) {
  //console.log(propertyName); // property name inside bc: "cities"
  //console.log(bc[propertyName]); // the corresponding value for that property. it comes back as an array with 3 objects.

  var tempArray = bc[propertyName];
  // we need to loop through an array now...
  for (let element of tempArray) {
    //console.log(element);

    let tempObj = element;
    // the element is an object
    // we need to step through that objects properties
    for (let property in tempObj) {
      //console.log(property); // property
      //console.log(tempObj[property]); // value

      // BC has a city named Vancouver which has a population of 200000
      console.log(`${bc.name} has a city named ${vancouver.name} which has a ${property} of ${tempObj[property]}`);
    }
  }
}






// let ab = {};
// let on = {};
