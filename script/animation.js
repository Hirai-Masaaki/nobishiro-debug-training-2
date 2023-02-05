$(window).on("load scroll resize", function () {
  var scPos = $(window).scrollTop();
  var wh = $(window).height();

  $(".fade").each(function (i) {
    var tg = $(this).offset().top - wh * 0.9;

    if (scPos > tg) {
      $(this).addClass("show");
    } else {
      $(this).removeClass("show");
    }
  });

  $(".fade--up, .fade--right, .fade--left").each(function (i) {
    var tg = $(this).offset().top - wh * 0.9;

    if (scPos > tg) {
      $(this).addClass("show");
    } else {
      $(this).removeClass("show");
    }
  });
});

//go top
$(function () {
  var topBtn = $('#back_to_top');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      topBtn.addClass('sc');
    } else {
      topBtn.removeClass('sc');
    }
  });
  //スクロールしてトップ
  topBtn.click(function () {
    $('body,  html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });
});