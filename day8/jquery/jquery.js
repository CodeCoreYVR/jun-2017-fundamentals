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

// oop - getting and settings
// html
// <img src="puppy.jpg">
// // css
// img {
//   width: 100px;
//   height: 100px;
// }
// jquery
$('img').attr('src'); // what is the image's src attribute, getting the src attr
// getting the first item in our result set, not every item

$('img').attr('src', 'cat.jpg'); // this changes the src attr to cat.jpg, changes the image for all the elements in our result set.
// html
// <img src="cat.jpg">

// html
// <tagname attribute="value">InnerHTML</tagname>
// <a href="http://www.google.com">Google</a>

//jquery
$('a').attr('href'); // give me the href for the first link on the page
// when we get, we only return the first result.

$('a').attr('href', 'http://www.codecore.ca'); // changes all the links on the page to codecore. because when we set, it changes the entire wrapped set.

// set the class attribute of all the links to "highlight"
// html
// <a href="http://www.google.com" class="highlight">Google</a>
// css
// .highlight {
//   background-color: yellow;
// }

// jquery
$('a').attr('class', 'highlight'); // turns the background color for all my links to yellow

$('.shape').attr('class', 'highlight'); // made all our shapes disappear

// html
// <div class="small black square shape"></div>
// <div class="highlight"></div>

$('.shape').addClass('highlight'); // turns all shapes yellow

// html
// <div class="small black square shape"></div>
// <div class="small black square shape highlight"></div>

// remove
$('.blue.shape');
$('.blue.shape').remove(); // this will delete the html tag(s)
$('.blue.shape').hide(); // this will change the display property to none

// css
// .blue.shape {
//   display: none;
// }

$('.blue.shape').show(); // this will change the display property back to what it once was

// css
// .blue.shape {
//   display: inline-block;
// }

// just remove the last blue shape????
$('.blue.shape')[3];
$('.blue.shape').eq(3);
$('.blue.shape').eq(3).remove();
$('.blue.shape').eq(3).show();
$('.blue.shape').eq(3).hide();
$('.blue.shape').eq(3).toggle(); // light switch


$('.blue.shape').parent().parent().parent();
$('.small.red.circle').remove();
$('*').remove(); // clears the page


// effects - takes in milliseconds as arguments
slideUp();
slideDown();
fadeIn();
fadeOut();
// favourite tool for UI and UX designers, because it improves the user experience

// developers love this -> events

// when x happens, do y
// where x is an event
// and y is a function
// y is a handler function
// y is a callback function

// higher order functions

$(document).ready(function(){
  // what do you want to do when this page has fully loaded???

}); // this is an event. the event is when the page is ready

// function init() {
// }
// $(document).ready(init);

$('a').click(function(){
  // when any hyperlink gets clicked, what do you want to do?
});

$('button').click(function(){});

// when any shape is clicked, log to the console that a shape was clicked
$('.shape').click(function(){
  console.log("a shape was clicked");
});

// what other events are there?
// ready
// click
// mouseenter
// mouseleave
// hover
// keypress

$('#orange-container').mouseenter(function() {
  $('#orange-container').children().addClass('highlight');
});

// this
$('#orange-container').mouseenter(function() {
  $(this).children().addClass('highlight');
});

$('.shape').mouseenter(function(){
  // this will return only the object that threw the event
  $(this).addClass('highlight');
});

$('.shape').mouseleave(function(){
  // this will return only the object that threw the event
  $(this).removeClass('highlight');
});


// keypress event
$(document).keypress(function(event){
  // anytime a key is pressed, these instructions will run
  console.log("a key was pressed: " + event.key);
  console.log("a key was pressed: " + event.keyCode);
  console.log(event);

  // WASD
  if (event.key == "w") {
    // move my character up
  } else if (event.key == "a") {
    // move my character left
  } else if (event.key == "d") {
    // move my character right
  } else if (event.key == "s") {
    // move my character down
  }

  switch (event.key) {
    case "w":
      // move my character up
      break;
    case "a":
      // move my character left
      break;
    case "s":
      // move my character down
      break;
    case "d":
      // move my character right
      break;
    default:
      // something else was pressed
      break;
  }
  // arrow keys, space manipulates the browser
});












//
