// strings and arrays!!! they're closely related

let greeting = "Hello Nick"; // this is a string
// ["H", "e", "l", "l", "o", " ", "N", "i", "c", "k"]

let characters = greeting.split(""); // the split method turns an string into an array of ??
// ["H", "e", "l", "l", "o", " ", "N", "i", "c", "k"]

let words = greeting.split(" "); // the split method turns an string into an array of ??
// ["Hello", "Nick"]

let characters = ["H", "e", "l", "l", "o", " ", "N", "i", "c", "k"];
// join allows us to glue the array back together to form a string
characters.join(); // "Hello Nick"
characters.join("-"); // "H-e-l-l-o- -N-i-c-k";
let words = ["Hello", "Nick"];
words.join(); // "HelloNick"
words.join(" "); // "Hello Nick"
words.join("*"); // "Hello*Nick"



// 
