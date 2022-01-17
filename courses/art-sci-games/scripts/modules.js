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

/* Modify URL+BOOK+H5P Module Group: */
$(this).ready(function(index) {
  // Move URL title:
  $(this).find(URL).each(function(index) {
      if ($(this).find('h3.snap-asset-link:contains("Information"),h3.snap-asset-link:contains("Walkthrough"),h3.snap-asset-link:contains("Tutorial")').length > 0) {

        //-- 1. remove url overflow mask + other covers
        $(this).find(".snap-asset-content .no-overflow").removeClass("no-overflow");
        $(this).find(".snap-assettype").css("height", "0px");
        $(this).find(".snap-header-card").css("display", "none");
        $(this).find("p.snap-resource-card-fadeout").remove();
        $(this).find("body.snap-resource-card li.snap-resource.modtype_url").css("background-image", "none");

        //-- 2. move module title to new home
        let oldTitle = $(this).find(".snap-asset-link")
        let newTitle = $(this).find(".snap-asset-content .contentafterlink div.tile-title")
        // save the title, remove it, and add to new location
        oldTitle.remove();
        newTitle.append(oldTitle);

        //-- 3. move first set of module icons to new home
        var oldIcon = $(".snap-header-card .snap-header-card-icons .snap-asset-completion-tracking img")
        var newIcon = ".snap-asset-content .contentafterlink div.tile-completion"
        // find the first of each, add empty class to mark
        let oldIcon_URL = $(this).first().find(oldIcon).addClass("moved")
        let oldIcon_BOOK = $(this).parent().find(BOOK).first().addClass("moved").find(oldIcon)
        let oldIcon_H5P = $(this).parent().find(H5P).first().addClass("moved").find(oldIcon)
        let newIconLocation = $(this).first().addClass("moved").find(newIcon)
        // save the icons, remove them, and add to new location
        oldIcon_URL.add(oldIcon_BOOK).add(oldIcon_H5P).remove()
        newIconLocation.append(oldIcon_URL).append(oldIcon_BOOK).append(oldIcon_H5P);

        //-- 3a. move next set of module icons to new home, repeat until finished
        $(this).each(function() {
          let oldIcon_URL = $(this).parent().find("li.modtype_url:not(.moved)").first().find(oldIcon).addClass("moved")
          let oldIcon_BOOK = $(this).parent().find("li.modtype_book:not(.moved)").first().addClass("moved").find(oldIcon)
          let oldIcon_H5P = $(this).parent().find("li.modtype_h5pactivity:not(.moved)").first().addClass("moved").find(oldIcon)
          let newIconLocation = $(this).parent().find("li.modtype_url:not(.moved)").first().addClass("moved").find(newIcon)
          // relocate all moved-targeted items to new location
          newIconLocation.append(oldIcon_URL).append(oldIcon_BOOK).append(oldIcon_H5P);
        });
      });
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
