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
var LAB = 'li.modtype_label'

/* Main Components: */
$(document).ready(function(index) {
  // table of contents, separate sections:
  $('nav#course-toc ol#chapters li:not(:contains("Exercise"))').css("border-top", "1px solid #dee2e6");
  // shorten labels:
  $(this).find(LAB).each(function(index) {
    $(this).css("padding", "0");
    $(this).find(".activityinstance .snap-header-card").remove();
  });
});

/* DOM Changes & Observations: */
const observeTopicsList = document.querySelector("ul.topics li");

const observer = new MutationObserver(function() {
  $('li.section h2.sectionname').hide();
});

observer.observe(observeTopicsList, {
  subtree: true,
  childList: true
});

/* Stop Videos When Modal Closes: */
