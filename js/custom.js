$(function() {

    var lightbox = $("#gallery a").simpleLightbox();

    // Activate wow.js
    new WOW().init();

    $(".navbar .nav-link").click(function () {
      $(".navbar-collapse").collapse("hide");
    });
});
