/* ----------------------
| MODULES JS OVERWRITES |
---------------------- */

/* Variables: */
var URL = 'li.modtype_url'
var BOOK = 'li.modtype_book'
var H5P = 'li.modtype_h5pactivity'
var QUIZ = 'li.nodtype_quiz'
var ASSN = 'li.modtype_assignment'
var CHAT = 'li.modtype_hsuforum'

/* Modify URL+BOOK+H5P Module Group: */
$(this).ready(function(index) {
  // Move URL title:
  $('nav#course-toc ol#chapters li').css("border-top", "1px solid #dee2e6");
  $('nav#course-toc ol#chapters li:contains("Exercise"))').css({
    "border-top": "none",
    "margin-left": "15px"
  });
});
