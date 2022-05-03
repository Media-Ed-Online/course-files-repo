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
  $('nav#course-toc ol#chapters li:not(:contains("Exercise"))').css("border-top", "1px solid #dee2e6");
});




// Using the location.hash property to change the anchor part
window.addEventListener("hashchange", myFunction);

function myFunction() {
  alert("The anchor part has changed!");
}

function(b) {
  var c = this.getAttribute("href");
  if (window.history && window.history.pushState) {
    history.pushState(null, null, c);
    a(window).trigger("hashchange");
    alert("The anchor part has changed!");
  } else {
    location.hash = c
  }
}
