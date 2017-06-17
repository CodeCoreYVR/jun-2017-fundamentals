// for..of allows us to loop over an array
let letters = ["a", "b", "c", "d"];

// this will step through each individual letter in our letters array
// the letter variable will hold that individual value temporarily until
// it is replaces the next time through
for (let letter of letters) {
  console.log(letter);
}

// for of will exit out of the for loop automatically for us, once it hits the end of the array

let numbers = [1,2,3,4,5];

// total sum of all these numbers are?
// 1 + 2 + 3 + 4 + 5 = 15
// numbers[0] + number[1] + number[2] + number[3] + number[4] = 15
let total = 0;

for (let number of numbers) {
  total += number;
  // total = total + number;
}


let purchases = [1.01, 2043.43, 504.32];
let totalPurchase = 0;

for (let purchase of purchases) {
  totalPurchase += purchase;
}

for (let i=0; i<purchases.length; i++) {
  console.log(purchases[i]);
  totalPurchase += purchases[i];
}
// what is the total of all my purchase?






//
