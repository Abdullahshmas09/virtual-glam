// Load header and footer dynamically
fetch('header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header').innerHTML = data;
  })
  .catch(error => console.error('Error loading header:', error));

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

// Slick slider setup for banner sliders
jQuery(document).ready(function ($) {
  $('.bannerSlider, .bannerSlider1').each(function () {
    $(this).slick({
      dots: false,
      arrows: true,
      infinite: true,
      speed: $(this).hasClass('bannerSlider') ? 1000 : 3000,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: $(this).hasClass('bannerSlider') ? 1000 : 10000,
      responsive: [
        {
          breakpoint: 600,
          settings: { slidesToShow: 2, slidesToScroll: 1, arrows: false },
        },
        {
          breakpoint: 400,
          settings: { slidesToShow: 2, slidesToScroll: 1, arrows: $(this).hasClass('bannerSlider1') },
        },
      ],
    });
  });
  // Apply styles and display sections dynamically
  function applyStyles(activeId, sectionToShow) {
    $("#lips-color, #eye-colors, #lips-liner, #contours, #eye-shadows, #eye-liners, #bronzers, #blushes, #foundation, #eye-lashes, #concealers")
      .css("border", "none");

    $("#lip-color, #lip-liner, #eye-color, #contour, #eye-shadow, #eye-liner, #eye-lash, #bronzer, #concealer, #blush, #foundation")
      .hide();

    $(sectionToShow).show();
    $(activeId).css({ "border": "5px solid purple", "border-radius": "10rem" });
  }

  $("#lips-liner, #lips-color, #eye-colors, #contours, #eye-shadows, #eye-liners, #eye-lashes, #bronzers, #concealers, #blushes, #foundation").click(function () {
    const idMap = {
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
      "foundation": "#foundation",
    };

    applyStyles("#" + this.id, idMap[this.id]);
  });

  $('.bannerSlider1').on('afterChange', function (event, slick, currentSlide) {
    let activeSlide = $('.bannerSlider1 .slick-slide[data-slick-index="' + currentSlide + '"] img');
    let sectionId = activeSlide.attr('id');

    if (!sectionId) return;

    const idMap = {
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
      "foundations": "#foundation",
    };

    applyStyles("#" + sectionId, idMap[sectionId]);
  });
  // Slick slider setup for color images
  $('#color-images').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplaySpeed: 1000,
    centerMode: true,
    variableWidth: true,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 3, slidesToScroll: 1, arrows: true } },
      { breakpoint: 576, settings: { slidesToShow: 2, slidesToScroll: 1, arrows: true } },
      { breakpoint: 400, settings: { slidesToShow: 1, slidesToScroll: 1, arrows: false } },
    ],
  });
  // Toggle modal content
  $('#choose-modal').click(function () {
    $('#content1').hide();
    $('#content2').show();
  });

  $('#cross').click(function () {
    $('#content2').hide();
    $('#content1').show();
  });
  // Zoom functionality
  let zoomLevel = 1;

  $('#plus-btn').click(function () {
    zoomLevel += 0.1;
    $('#pic').css({ 'transform': `scale(${zoomLevel})`, 'max-width': '100%', 'max-height': '100%' });
  });

  $('#minus-btn').click(function () {
    if (zoomLevel > 0.5) {
      zoomLevel -= 0.1;
      $('#pic').css({ 'transform': `scale(${zoomLevel})`, 'max-width': '100%', 'max-height': '100%' });
    }
  });

  // Toggle elements on click
  $("#solid1").click(function () {

    $("#pic, #download-btn, #plus-btn, #first-slider, #minus-btn").hide();
    $("#door").show().css("z-index", "999");
    $("#cross, #undo").css("margin-top", "2rem");
    $("#slider-contaner").fadeIn();
  });

  $("#door").click(function (e) {
    e.preventDefault();
    $("#pic, #download-btn, #plus-btn, #first-slider, #minus-btn").show();
    $("#cross, #undo").css("margin-top", "0");
    $(this).hide();
  });
  //palette 
  $("#palette").click(function (e) {
    e.preventDefault();
    $("#palette").css("border", "1px solid purple")
    $("#content-first , #content-third").addClass("d-none")
    $("#powder, #face-palette").css("border", "none")
    $("#content-second").removeClass("d-none")
  });
  // powder
  $("#powder").click(function (e) {
    e.preventDefault();
    $("#powder").css("border", "1px solid purple")
    $("#content-second , #content-third").addClass("d-none")
    $("#palette, #face-palette").css("border", "none")
    $("#content-first").removeClass("d-none")
  });
  // face-palette
  $("#face-palette").click(function (e) {
    e.preventDefault();
    $("#face-palette").css("border", "1px solid purple")
    $("#content-second , #content-first").addClass("d-none")
    $("#powder , #palette").css("border", "none")
    $("#content-third").removeClass("d-none")
  });

  function applyStyles(activeId, sectionsToShow) {
    // Reset all buttons to their original styles before applying new styles
    $("#single, #dual, #tripple, #quad").css({
      "background": "white",
      "color": "black",
      "border": "2px solid purple"
    }).addClass("buttons-section");

    // Hide all content inside the sections
    $("#single-color, #double-color, #tri-color, #quad-color, #single-pattern, #dual-pattern, #tri-pattern, #quad-pattern").children().hide();

    // Apply styles to the currently active button
    $(activeId).removeClass("buttons-section").css({
      "background": "#c6bed3",
      "color": "#61145a",
      "border": "none"
    });

    // Show only the relevant sections
    $(sectionsToShow).children().show();
    $(sectionsToShow).removeClass("d-none");
  }

  $("#single, #dual, #tripple, #quad").click(function () {
    let idMap = {
      "single": "#single-color, #single-pattern",
      "dual": "#double-color, #dual-pattern",
      "tripple": "#tri-color, #tri-pattern",
      "quad": "#quad-color, #quad-pattern",
    };

    applyStyles("#" + this.id, idMap[this.id]);
  });
  //  IMAGES BORDER
  $('#single-color img:not(#main, #none), #double-color img:not(#main, #none), #tri-color img:not(#main, #none), #quad-color img:not(#main, #none)').on('click', function () {
    // Remove border from all images (excluding #main and #none)
    $('#single-color img, #double-color img, #tri-color img, #quad-color img').css({
      "border": "none",
      "borderRadius": "0"
    });

    // Add border to the clicked image
    $(this).css({
      "border": "3px solid purple",
      "borderRadius": "1rem"
    });
  });
  // pattern
  $("div[id$='pattern']").each(function () {
    $(this).on("click", "img", function () {
      $(this).siblings().css({ "border": "", "border-radius": "" });
      $(this).css({ "border": "3px solid purple", "border-radius": "1rem" });
    });
  });
  // contour image pattern 

  $("#content-first img:not(#none), #content-second img:not(#none), #content-third img").click(function (e) {
    e.preventDefault();

    // Remove border from all images before applying to the clicked one
    $("#content-first img, #content-second img, #content-third img").css({ "border": "none" });
    $(this).css({ "border": "3px solid purple", "border-radius": "1rem" });
  });
});
// Adjust opacity based on slider value
function slide() {
  let slideValue = document.getElementById("slider").value;

  if (slideValue <= 50) {
    $("#image1").css("opacity", "1");
    $("#image2").css("opacity", "0");
  } else {
    $("#image1").css("opacity", "0");
    $("#image2").css("opacity", "1");
  }
}













