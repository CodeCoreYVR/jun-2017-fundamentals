// let response = window.confirm("Would you like to see the website?");

// if (response == true) {
  // show the webpage
// } else {
  // hide the webpage
  // how can we manipulate css properties on html elements
  // i want to set the display property for all my elements to none
// }

// 1. move the js script include to the bottom of the page - brute force method

// 2.
// window.onload = function() {
//   document.getElementById("web").innerHTML = "Welcome to onload of DOM";
// };

// 3.
// document.addEventListener("DOMContentLoaded", function(){
//   document.getElementById("web").innerHTML = "Welcome to DOMContentLoaded of DOM";
// });

// 4. jquery ready();
// we pass into the ready method a call back function. this means that ready is a higher order function
$(document).ready(function(){
  console.log("The webpage has finished loading");
  // change the innerhtml of your h1 tag using jquery
  $('h1').html("Welcome to jQuery!");
});

// 5. there is always a short way to do things in jquery
// $(function(){
//   console.log("The webpage has finished loading using the short form");
// });





//
