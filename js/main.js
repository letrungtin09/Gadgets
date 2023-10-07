$(document).ready(function () {
  $(".bestseller__slider").slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrow: true,
    swipeToSlide: true,
  });
});

$(document).ready(function () {
  $(".bestseller__slider2").slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrow: true,
    swipeToSlide: true,
  });
});

$(document).ready(function () {
  $(".bestseller__slider3").slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrow: true,
    swipeToSlide: true,
  });
});

$(document).ready(function () {
  $(".productIntro__slide").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".productIntro__nav",
  });
  $(".productIntro__nav").slick({
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: ".productIntro__slide",
    centerMode: true,
    focusOnSelect: true,
    vertical: true,
    verticalSwiping: true,
  });
});

Fancybox.bind('[data-fancybox="gallery"]', {
  Thumbs: {
    type: "classic",
  },
});
