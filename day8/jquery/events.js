
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
