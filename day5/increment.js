// increment

// const ++ {
//   // do something
// }

//set a step to your value object


const value = {
  counter: 0,
  step: 1,
  inc() {
    this.counter = this.counter + step;
    return this.counter;
  },
  dec() { this.counter = this.counter - step },
  set(number) { this.counter = number },
  get() { return this.counter },
  reset() { this.counter = 0 },
  setStep(newStep) { this.step = newStep }
};

// syntax sugar
// i++;

// Testing, testing, testing
// test driven design: TDD
value.counter; // 0
value.inc();
value.inc();
value.inc();
value.inc();
value.counter; // 4
value.dec();
value.dec();
value.dec();
value.counter; // 1
console.log( value.set(100) );
value.counter; // 100
value.reset();
value.counter; // 0
console.log( value.get() ); // logs out 0\

value.setStep(2);
value.inc();
value.inc(); // 4
value.dec(); // 2
value.setStep(1);
value.inc(); // 2
value.inc(); // 3
value.inc(); // 4
value.setStep(3);
value.dec(); // 1



//
