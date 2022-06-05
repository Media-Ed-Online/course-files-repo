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

  let data1 = $(this).find("li.modtype_url p.instancename").map(function(index) {
    //return index + ": " + $(this).text();
    return $(this).text()
  }).get();
  let data2 = $(this).find("li.modtype_book p.instancename").map(function(index) {
    return $(this).text();
  }).get();

  const filteredArray = data1.filter(value => data2.includes(value));

  alert(filteredArray)
});

observer.observe(observeTopicsList, {
  subtree: true,
  childList: true
});
