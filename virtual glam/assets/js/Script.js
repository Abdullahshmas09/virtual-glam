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
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
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
$(document).ready(function () {
  //  for 
  $("#lips-liner").click(function () {
    $(this).css({
      "border": "3px solid purple",
      "border-radius": "10rem"
    });
    $("#lips-color , #lips-plumper ,#eye-brows,#eye-shadow ").css("border", "none"); // Remove border from lips-color
    $(".lip-color ,#lip-plumper , #eye-brow, #eye-shadow , #eye-lash").hide(); // Hide Lip Color Section
    $("#lip-liner").show(); // Show Lip Liner Section
  });
  //  for lips color
  $("#lips-color").click(function () {
    $(this).css({
      "border": "3px solid purple",
      "border-radius": "10rem"
    });
    $("#lips-liner , #lips-plumper , #eye-brows ,#eye-shadows ,#eye-lashes").css("border", "none"); // Remove border from lips-liner
    $("#lip-color").show(); // Show Lip Color Section
    $("#lip-liner , #lip-plumper ,#eye-brow , #eye-shadow , #eye-lash").hide(); // Hide Lip Liner Section
  });
  //   for lips plumper
  $("#lips-plumper").click(function () {
    $(this).css({
      "border": "3px solid purple",
      "border-radius": "10rem"
    });
    $("#lips-liner ,#lips-color , #eye-brows , #eye-shadows , #eye-liners ,#eye-lashes").css("border", "none"); // Remove border from lips-liner
    $("#lip-color , #lip-liner ,#eye-brow , #eye-shadow , #eye-liner , #eye-lash").hide(); // Show Lip Color Section
    $("#lip-plumper").show();
  });
  // for eye brow 
  $("#eye-brows").click(function () {
    $(this).css({
      "border": "3px solid purple",
      "border-radius": "10rem"
    });
    $("#lips-liner ,#lips-color , #lips-plumper , #eye-shadows, #eye-liners ,#eye-lashes").css("border", "none"); // Remove border from lips-liner
    $("#lip-color , #lip-liner ,#lip-plumper, #eye-shadow , #eye-liner , #eye-lash").hide(); // Show Lip Color Section
    $("#eye-brow").show();
  });
  //  for eye shadow
  $("#eye-shadows").click(function () {
    $(this).css({
      "border": "3px solid purple",
      "border-radius": "10rem"
    });
    $("#lips-liner ,#lips-color , #lips-plumper , #eye-brows, #eye-liners ,#eye-lashes").css("border", "none"); // Remove border from lips-liner
    $("#lip-color , #lip-liner ,#lip-plumper , #eye-brow , #eye-liner , #eye-lash").hide(); // Show Lip Color Section
    $("#eye-shadow").show();
  });
  // for eye liners 
  $("#eye-liners").click(function () {
    $(this).css({
      "border": "3px solid purple",
      "border-radius": "10rem"
    });
    $("#lips-liner ,#lips-color , #lips-plumper , #eye-brows, #eye-shadows , #eye-lashes").css("border", "none"); // Remove border from lips-liner
    $("#lip-color , #lip-liner ,#lip-plumper , #eye-brow , #eye-shadow , #eye-lash").hide(); // Show Lip Color Section
    $("#eye-liner").show();
  });
  //  for eye lashes 
  $("#eye-lashes").click(function () {
    $(this).css({
      "border": "3px solid purple",
      "border-radius": "10rem"
    });
    $("#lips-liner ,#lips-color , #lips-plumper , #eye-brows, #eye-shadows , #eye-liners").css("border", "none"); // Remove border from lips-liner
    $("#lip-color , #lip-liner ,#lip-plumper , #eye-brow , #eye-shadow , #eye-liner").hide(); // Show Lip Color Section
    $("#eye-lash").show();
  });
});


