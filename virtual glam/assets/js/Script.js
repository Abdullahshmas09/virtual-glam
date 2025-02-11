
$(document).ready(function () {
  // Fetch and insert header
  fetch('header.html')
    .then(response => response.text())
    .then(data => {
      $('#header').html(data);
    })
    .catch(error => console.error('Error loading header:', error));

  // Fetch and insert footer
  fetch('Footer.html')
    .then(response => response.text())
    .then(data => {
      const footer = $('#footer');
      if (footer.length) {
        footer.html(data);
      } else {
        console.error('Footer element not found');
      }
    })
    .catch(error => console.error('Error loading footer:', error));

  // Initialize Slick Slider for .bannerSlider
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

  // Initialize Slick Slider for .bannerSlider1
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

  // Function to apply styles
  function applyStyles(activeId, sectionToShow) {
    $("#lips-color, #eye-colors, #lips-liner, #contours, #eye-shadows, #eye-liners, #bronzers, #blushes, #foundation, #eye-lashes, #concealers")
      .css("border", "none");

    $("#lip-color, #lip-liner, #eye-color, #contour, #eye-shadow, #eye-liner, #eye-lash, #bronzer, #concealer, #blush, #foundation")
      .hide();

    $(sectionToShow).show();
    $(activeId).css({ "border": "5px solid purple", "border-radius": "10rem" });
  }

  // Click event for sections
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

  // Handle slide changes in .bannerSlider1
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

