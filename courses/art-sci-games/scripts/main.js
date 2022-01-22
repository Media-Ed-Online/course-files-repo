/* -------------------
| MAIN JS OVERWRITES |
------------------- */

/* Hide-show activities hidden by modules.js file:*/
// Create toggle button:
$('#region-main').prepend('<button id="eye-show" title="show hidden activities" style="display: block; width: 50px; height: 50px; line-height: 50px; position: fixed; bottom: 20px; left: 20px; background: #E5164D; border-radius: 50px; border: none; filter: drop-shadow(4px 4px 1px rgba(0,0,0,.4)); z-index: 100; color: #fff;font-size: 26px; text-align: center;"><i class="fa fa-eye" aria-hidden="true"></i></button>')
// Button styling:
$("#eye-show").hover(function() {
  $(this).css({
    "font-size": "32px",
    "transition": "font-size .2s ease-in-out",
  });
}, function() {
  $(this).css({
    "font-size": "26px",
    "transition": "font-size .2s ease-in-out",
  });
});
$("#eye-show").click(function() {
  $("li.modtype_book, li.modtype_h5pactivity").toggle();
  $(this).find("i").toggleClass('fa-eye-slash');
});
