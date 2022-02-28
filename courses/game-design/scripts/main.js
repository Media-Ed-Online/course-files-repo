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

/* Modify URL+BOOK+H5P Module Group: */
$(document).ready(function() {
  //attaching the event listener
  $('#region-main').css("background", "green")
  $(window).on('hashchange', function() {
    $('#region-main').css("background", "pink")
  }).trigger('hashchange');
});




/* ---------------------
| COMPLETION TRACKING  |
--------------------- */

/* Replace tracking icons with custom images:*/
$(document).ready(function() {
  // Progress Tracking: Admin Indication
  $('img[src*="completion-auto-enabled"]').attr("src", "https://media-ed-online.github.io/course-files-repo/courses/art-sci-games/graphics/comptrack/comptrack-incomplete.png");
  // Progress Tracking: Incomplete
  $('img[src*="completion-auto-n"]').attr("src", "https://media-ed-online.github.io/course-files-repo/courses/art-sci-games/graphics/comptrack/comptrack-incomplete.png");
  // Progress Tracking: Complete
  $('img[src*="completion-auto-y"]').attr("src", "https://media-ed-online.github.io/course-files-repo/courses/art-sci-games/graphics/comptrack/comptrack-complete-pass.png");
  // Progress Tracking: Complete Pass
  $('img[src*="completion-auto-pass"]').attr("src", "https://media-ed-online.github.io/course-files-repo/courses/art-sci-games/graphics/comptrack/comptrack-complete-pass.png");
  // Progress Tracking: Complete Fail
  $('img[src*="completion-auto-fail"]').attr("src", "https://media-ed-online.github.io/course-files-repo/courses/art-sci-games/graphics/comptrack/comptrack-complete-fail.png");

  // Progress Tracking: Restriction Set
  $('img[src*="lock"]').attr("src", "https://media-ed-online.github.io/course-files-repo/courses/art-sci-games/graphics/comptrack/comptrack-locked.png");

  // Hide in Table of Contents:
  $("nav#course-toc a.chapter-title + span.completionstatus").hide();
});
