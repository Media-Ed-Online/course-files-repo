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
$('body').on('DOMNodeInserted', function(e) {
  // remove section number from topics view:
  $('li.section h2.sectionname span.sectionnumber').hide();

  /* Modify URL+BOOK+H5P Module Group: */
  // Group URL+BOOK+H5P together:
  $(URL).nextUntil(URL).ready(function() {
    let a = $(this).find('.snap-asset-link a').text();
    let b = $(this).prev().find('li.modtype_book h3.snap-asset-link').text();

    alert("a is -> " + a + "\nb is -> " + b + "\n");

    if (a === b) { // if these two variables match
      $("p.instancename").css('color', 'red'); // color 'div.main' red
    } else {

    }
  });

  // Move URL title:
  /*$(URL).each(function(index) {
    //-- 1. remove url overflow mask + other covers
    $(this).find(".snap-asset-content .contentafterlink .no-overflow").removeClass("no-overflow");
    $(this).find(".snap-assettype").css("height", "0px");
    $(this).find(".snap-header-card").css("display", "none");
  });*/
});
