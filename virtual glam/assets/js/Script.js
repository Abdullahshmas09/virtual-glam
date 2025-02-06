// Dynamically load the header content
fetch('header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header').innerHTML = data;
  })
  .catch(error => console.error('Error loading header:', error));

// Dynamically load the footer content
fetch('Footer.html')
  .then(response => response.text())
  .then(data => {
    const footer = document.getElementById('footer');
    if (footer) {
      footer.innerHTML = data;
    } else {
      console.error('Footer element not found');
    }
  })
  .catch(error => console.error('Error loading footer:', error));
// jQuery and Slick Slider setup
jQuery(document).ready(function ($) {
  $('.bannerSlider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

jQuery(document).ready(function ($) {
  $('.bannerSlider1').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          arrows: true,
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
//  show the lip liner section
//  slider id 
// lips-color , lips-liner ,eye-colors  , contours, eye-shadows ,eye-liners , bronzers ,concealers ,blushes , foundations
// $("#lips-color , #eye-colors ,#lips-liner , #contours,#eye-shadow , #eye-liners , #bronzers , #blushes , #foundation , #eye-lashes ,#concealers").css("border", "none");
// $("#lip-color ,#lip-liner, #eye-color , #contour , #eye-shadow , #eye-liner , #eye-lash , #bronzer ,#concealer , #blush , #foundation ").hide();

$(document).ready(function () {
  function applyStyles(activeId, sectionToShow) {
    $("#lips-color, #eye-colors, #lips-liner, #contours, #eye-shadows, #eye-liners, #bronzers, #blushes, #foundation, #eye-lashes, #concealers")
      .css("border", "none");

    $("#lip-color, #lip-liner, #eye-color, #contour, #eye-shadow, #eye-liner, #eye-lash, #bronzer, #concealer, #blush, #foundation")
      .hide();

    $(sectionToShow).show();
    $(activeId).css({ "border": "5px solid purple", "border-radius": "10rem" });
  }

  $("#lips-liner, #lips-color, #eye-colors, #contours, #eye-shadows, #eye-liners, #eye-lashes, #bronzers, #concealers, #blushes, #foundation").click(function () {
    let idMap = {
      "lips-liner": "#lip-liner",
      "lips-color": "#lip-color",
      "eye-colors": "#eye-color",
      "contours": "#contour",
      "eye-shadows": "#eye-shadow",
      "eye-liners": "#eye-liner",
      "eye-lashes": "#eye-lash",
      "bronzers": "#bronzer",
      "concealers": "#concealer",
      "blushes": "#blush",
      "foundation": "#foundation"
    };

    applyStyles("#" + this.id, idMap[this.id]);
  });

  $('.bannerSlider1').on('afterChange', function (event, slick, currentSlide) {
    let activeSlide = $('.bannerSlider1 .slick-slide[data-slick-index="' + currentSlide + '"] img');
    let sectionId = activeSlide.attr('id');

    if (!sectionId) return;

    let idMap = {
      "lips-liner": "#lip-liner",
      "eye-colors": "#eye-color",
      "lips-color": "#lip-color",
      "contours": "#contour",
      "eye-shadows": "#eye-shadow",
      "eye-liners": "#eye-liner",
      "eye-lashes": "#eye-lash",
      "bronzers": "#bronzer",
      "concealers": "#concealer",
      "blushes": "#blush",
      "foundations": "#foundation"
    };

    applyStyles("#" + sectionId, idMap[sectionId]);
  });
});

