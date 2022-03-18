/* -------------------
| MAIN JS OVERWRITES |
------------------- */

/* Variables: */
var URL = 'li.modtype_url'
var BOOK = 'li.modtype_book'
var H5P = 'li.modtype_h5pactivity'
var QUIZ = 'li.nodtype_quiz'
var ASSN = 'li.modtype_assignment'
var CHAT = 'li.modtype_hsuforum'

/* Main Components: */
$(this).ready(function(index) {
  // table of contents:
  $('nav#course-toc ol#chapters li:not(:contains("Discussion"))').css("border-top", "1px solid #dee2e6");
});




// Using the location.hash property to change the anchor part
function changePart() {
  location.hash = "topic-1";
  var x = location.hash;
  document.getElementById("demo").innerHTML = "The anchor part is now: " + x;
}

window.addEventListener("hashchange", myFunction);

function myFunction() {
  alert("The anchor part has changed!");
}
