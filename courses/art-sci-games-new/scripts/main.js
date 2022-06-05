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
$('li.section').on('DOMNodeInserted', function(e) {
  // remove section number from topics view:
  $('li.section h2.sectionname span.sectionnumber').hide();

  // Group URL+BOOK+H5P together:
  var data1 = $("li.section.state-visible").find("li.modtype_url p.instancename").map(function(index) {
    return index + ": " + $(this).text();
  }).get();
  var data2 = $("li.section.state-visible").find("li.modtype_book p.instancename").map(function(index) {
    return index + ": " + $(this).text();
  }).get();

  alert(data1 + data2);

  const filteredArray = array1.filter(value => array2.includes(value));

  function intersect(a, b) {
    var t;
    if (b.length > a.length) t = b, b = a, a = t; // indexOf to loop over shorter
    return a.filter(function(e) {
      return b.indexOf(e) > -1;
    });
  }


  /*let a = $(this).find('li.modtype_url .snap-asset-link a').text();
  let b = $(this).find('li.modtype_book h3.snap-asset-link').text();

  alert("a is -> " + a + "\nb is -> " + b + "\n");

  if (a === b) { // if these two variables match
    $(a + "p.instancename").css('color', 'red'); // color 'div.main' red
  } else {

  }*/
});
