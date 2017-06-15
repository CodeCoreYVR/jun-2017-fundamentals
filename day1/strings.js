// String - collection of characters
// the double quotes to define a string
"this is a string";
// single quotes also define a string
'this is also a string';
// back ticks are found above the esc key on your keyboard
`this is a string using back ticks`;

"I'll go over there.";
// escaping a character
'I\'ll go over there.\nI am here.';

'1' + '1'; // string concatenation - glueing two strings together
'1' + 1; // string concatenation - glueing two strings together
1 + '1'; // string concatenation - glueing two strings together

// string interpolation - injecting a piece of js code within a string
// ${} <- string interpolation
`In a dozen eggs, there are ${ 6 + 6 } eggs`;

// string methods or functions
4 + parseInt("5"); // i want to get 9
4 + parseInt("5abc"); // i want to get 9
4 + parseInt("abc5"); // NaN

"hello".length;
"merry christmas                         ".trim();
"Jacob"[0]; // accessing characters within a string

rbbr
//
