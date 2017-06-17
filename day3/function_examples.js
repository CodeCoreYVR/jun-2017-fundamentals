// function examples

// insult function
function insult() {
  console.log("Bob, you doofus!");
}

insult();
insult();
insult();


function insult() {
  return "Bob, you doofus!";
}


window.alert( insult() );
document.write( insult() );
console.log( insult() );
console.log(`You are not nice, ${ insult() }`);

// compliment function
function compliment() {
  console.log("Bob, you look great!");
}

compliment();
compliment();
compliment();

function compliment(name) {
  console.log(`${ name }, you look great!`);
}

compliment("Jacob");
compliment("Jesse");
compliment("Max");

function compliment(name) {
  return `${ name }, you look great!`;
}

console.log( compliment("Jacob") );
window.alert( compliment("Jesse") );
document.write( compliment("Max") );
