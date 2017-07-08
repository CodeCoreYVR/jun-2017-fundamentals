// notes on jquery

// select all the shapes

// most basic jquery function call
$();

// $ = selector
// what is a selector?  css selector
$('h1')
// html
// <h1></h1>
// css
// h1 {
//
// }

// html
// <div class="shape"></div>
// how would i select all the shapes using css?
// .shape {
//
// }

$('.shape'); // selects all the shapes on our page, 16 in total
// returns an array
$('.shape').length; // 16
$('.shape')[0]; // gives us the first shape

// select all the black shapes
// html
// <div class="shape black">
// css
// .shape.black {
//
// }
// jquery
$('.shape.black');

// count the number of shapes
$('.shape').length; // 16

// count the number of black shapes
$('.shape.black').length; // 4

// count the number of blue shapes
$('.shape.blue').length; // 4

// count the number of black and blue shapes
$('.shape.black').length + $('.shape.blue').length; // 8

$('.shape.black, .shape.blue').length; // 8

// html
// <div class="shape black"></div>
// <div class="shape blue"></div>
//
// // css
// .shape.black {}
// .shape.blue {}
// .shape.blue, .shape.black {}

// select all the h1 tags
$('h1'); // returns a list of 5 elements
// document.getElementsByTagName('h1');

// select all the small circles
$('.small.circle');

// html
// <div class="small circle"></div>

// css
// .small.circle {}


// wrapped set
$('h1')[0]; // Shapes
$('h1')[1]; //
$('h1')[2]; //
$('h1')[3]; //
$('h1')[4]; // Form

// wrapped set with methods
$('h1').eq(0);
$('h1').eq(4);
