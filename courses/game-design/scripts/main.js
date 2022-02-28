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
$(this).ready(function(index) {
$('#page').css('background', 'green');
});

$(window).hashchange(function() {
  var back = ["#ff0000", "blue", "gray"];
  var rand = back[Math.floor(Math.random() * back.length)];
  $('#page').css('background', rand);
});
