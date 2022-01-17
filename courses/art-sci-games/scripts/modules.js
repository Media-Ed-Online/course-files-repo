/* -------------------
| MODULES OVERWRITES |
------------------- */

/* Variables: */
var URL = 'li.modtype_url'
var BOOK = 'li.modtype_book'
var H5P = 'li.modtype_h5pactivity'
var QUIZ = 'li.nodtype_quiz'
var ASSN = 'li.modtype_assignment'
var CHAT = 'li.modtype_hsuforum'

/* Create URL+BOOK+H5P Module Group: */
// Move URL title:
$(this).ready(function(index) {
  $(this).find(URL).each(function(index) {
    if ($(this).find('h3.snap-asset-link:contains("Information"),h3.snap-asset-link:contains("Walkthrough"),h3.snap-asset-link:contains("Tutorial")').length > 0) {

      //-- 1. remove url overflow mask + other covers
      $(this).find(".snap-asset-content .no-overflow").removeClass("no-overflow");
      $(this).find(".snap-assettype").css("height", "0px");
      $(this).find(".snap-header-card").css("display", "none");
      $(this).find("p.snap-resource-card-fadeout").remove();
      $(this).find("body.snap-resource-card li.snap-resource.modtype_url").css("background-image","none");

      //-- 2. move module title to new home
      let oldTitle = $(this).find(".snap-asset-link")
      let newTitle = $(this).find(".snap-asset-content .contentafterlink div.tile-title")
      // save the title, remove it, and add to new location
      oldTitle.remove();
      newTitle.append(oldTitle);

      // -- 3. styling
      // see linked stylesheet
    };
  });
});




/* ---------------------
| COMPLETION TRACKING  |
--------------------- */

/* Replace tracking icons with custom images:*/
$(document).ready(function() {
  // Progress Tracking: Admin Indication
  $('img[src*="completion-auto-enabled"]').attr("src", "https://media-ed-online.github.io/course-files-repo/courses/art-sci-games/images/comptrack/comptrack-incomplete.png");
  // Progress Tracking: Incomplete
  $('img[src*="completion-auto-n"]').attr("src", "https://media-ed-online.github.io/course-files-repo/courses/art-sci-games/images/comptrack/comptrack-incomplete.png");
  // Progress Tracking: Complete
  $('img[src*="completion-auto-y"]').attr("src", "https://media-ed-online.github.io/course-files-repo/courses/art-sci-games/images/comptrack/comptrack-complete-pass.png");
  // Progress Tracking: Complete Pass
  $('img[src*="completion-auto-pass"]').attr("src", "https://media-ed-online.github.io/course-files-repo/courses/art-sci-games/images/comptrack/comptrack-complete-pass.png");
  // Progress Tracking: Complete Fail
  $('img[src*="completion-auto-fail"]').attr("src", "https://media-ed-online.github.io/course-files-repo/courses/art-sci-games/images/comptrack/comptrack-complete-fail.png");

  // Progress Tracking: Restriction Set
  $('img[src*="lock"]').attr("src", "https://media-ed-online.github.io/course-files-repo/courses/art-sci-games/images/comptrack/comptrack-locked.png");
});
