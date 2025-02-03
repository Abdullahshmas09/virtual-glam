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
          arrows:false,
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


