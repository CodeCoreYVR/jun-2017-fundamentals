
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
