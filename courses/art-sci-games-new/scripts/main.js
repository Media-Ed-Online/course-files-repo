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
$(this).ready(function(index) {
  // table of contents:
  $('nav#course-toc ol#chapters li:not(:contains("Exercise"))').css("border-top", "1px solid #dee2e6");
});




// Using the location.hash property to change the anchor part
define('core/log', [
  'core/loglevel'
], function (a) {
  var b = a.methodFactory;
  a.methodFactory = function (a, c) {
    var d = b(a, c);
    return function (a, b) {
      if (b) {
        d(b + ': ' + a)
      } else {
        d(a)
      }
    }
  };
  a.setConfig = function (b) {
    if ('undefined' != typeof b.level) {
      a.setLevel(b.level)
    }
  };
  return a;
  alert("The anchor part has changed!");
});
