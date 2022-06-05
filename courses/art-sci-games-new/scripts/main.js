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
$(document).ready(function(index) {
  // table of contents, separate sections:
  $('nav#course-toc ol#chapters li:not(:contains("Exercise"))').css("border-top", "1px solid #dee2e6");
  // table of contents, hide completion status:
  $("nav#course-toc a.chapter-title + span.completionstatus").hide();
});

/* On DOM Changes: */

// identify an element to observe
const elementToObserve = document.querySelector("ul.topics");

// create a new instance of `MutationObserver` named `observer`,
// passing it a callback function
const observer = new MutationObserver(function() {
    console.log('callback that runs when observer is triggered');
});

// call `observe()` on that MutationObserver instance,
// passing it the element to observe, and the options object
observer.observe(elementToObserve, {subtree: true, childList: true});
