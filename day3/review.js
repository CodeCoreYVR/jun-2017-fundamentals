// <html>
// # this is a comment

let name = "Jacob";

`There are ${ 12 } eggs in a dozen.`
`There are ${ 6 + 6 } eggs in a dozen.`
`There are ${ 6 * 2 } eggs in a dozen.`

let dozen = 12;
`There are ${ dozen } eggs in a dozen.`

// === threequals vs double ==

// double equals will the underlying value
if (2 == "2") {
  console.log("This would print out");
}

// triples will compare the underlying value and check to see if the data types match.
if (2 === "2") {
  console.log("This will not print out");
}
