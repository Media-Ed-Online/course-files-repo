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
  // table of contents:
  $('nav#course-toc ol#chapters li:not(:contains("Exercise"))').css("border-top", "1px solid #dee2e6");

  $('div#moodle-blocks').parentsUntil('section#region-main').find('div.course-content ul.topics li.section h2.sectionname span.sectionnumber').hide();
});

$('div#moodle-blocks').parentsUntil('section#region-main').find('div.course-content ul.topics li.section h2.sectionname span.sectionnumber').hide();
