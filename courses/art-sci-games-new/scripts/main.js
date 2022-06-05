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

/* DOM Changes & Observations: */

const observeTopicsList = document.querySelector("ul.topics li");

const observer = new MutationObserver(function(e) {
  $('li.section h2.sectionname span.sectionnumber').hide();
});

observer.observe(observeTopicsList, {
  subtree: true,
  childList: true
});
