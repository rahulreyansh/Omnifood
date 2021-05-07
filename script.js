$(document).ready(function () {
  /* Sticky Navigation */
  $(".jss--section-features").waypoint(
    function (direction) {
      if (direction == "down") {
        $("nav").addClass("sticky", "mobile-nav-icon ");
      } else {
        $("nav").removeClass("sticky", ".mobile-nav-icon ");
      }
    },
    {
      offset: "60px;",
    }
  );

  /*--Mobile-Nav--*/
  $(".js--nav-bar").click(function () {
    var nav = $(".js--main-nav");
    var icon = $(".js--nav-bar ion-icon");
    nav.slideToggle(200);
  });
});
$(document).ready(function () {
  /* Every time the window is scrolled ... */
  $(window).scroll(function () {
    /* Check the location of each desired element */
    $(".js--wp-1").each(function (i) {
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      /* If the object is completely visible in the window, fade it it */
      if (bottom_of_window > bottom_of_object) {
        $(this).animate({ opacity: "1" }, 1000);
      }
    });
  });
});
