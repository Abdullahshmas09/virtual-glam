$(document).ready(function() {
    // Fetch and insert header dynamically
    fetch('header.html')
        .then(response => response.text())
        .then(data => $('#header').html(data))
        .catch(error => console.error('Error loading header:', error));

    // Fetch and insert footer dynamically
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
        responsive: [{
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
        infinite: false,
        speed: 1000,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [{
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
                    autoplaySpeed: 1000,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
        ],
    });

    // Function to apply styles when clicking on section items
    function applyStyles(activeId, sectionToShow) {
        // Remove the border from all elements
        $("#lips-color, #eye-colors, #lips-liner, #contours, #eye-shadows, #eye-liners, #bronzers, #blushes, #foundations, #eye-lashes, #concealers")
            .css("border", "none");

        // Hide all sections
        $("#lip-color, #lip-liner, #eye-color, #contour, #eye-shadow, #eye-liner, #eye-lash, #bronzer, #concealer, #blush, #foundation")
            .hide();

        // Show the selected section and remove the d-none class
        $(sectionToShow).show().removeClass("d-none");

        // Apply the active border to the clicked section
        $(activeId).css({ "border": "5px solid purple", "border-radius": "10rem" });
    }

    // Click event for section items
    $("#lips-liner, #lips-color, #eye-colors, #contours, #eye-shadows, #eye-liners, #eye-lashes, #bronzers, #concealers, #blushes, #foundations").click(function() {
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

        applyStyles("#" + this.id, idMap[this.id]);
    });

    // Handle slide changes in .bannerSlider1
    $('.bannerSlider1').on('afterChange', function(event, slick, currentSlide) {
        let totalSlides = slick.slideCount; // Get total number of slides
        let activeSlide = $('.bannerSlider1 .slick-slide[data-slick-index="' + currentSlide + '"] img');

        // Apply styles to the active slide
        activeSlide.css({ 'border': '4px solid purple', 'border-radius': '10px' });

        let sectionId = activeSlide.attr('id');
        if (!sectionId) return; // Exit if no section ID

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
        setTimeout(() => {
            if (sectionId === "eye-liners") {
                for (let i = currentSlide + 1; i < totalSlides; i++) {
                    ((index) => {
                        setTimeout(() => {
                            let prevSlide = $('.bannerSlider1 .slick-slide[data-slick-index="' + (index - 1) + '"] img');
                            let nextSlide = $('.bannerSlider1 .slick-slide[data-slick-index="' + index + '"] img');
                            prevSlide.css({ 'border': '', 'border-radius': '' });
                            nextSlide.css({ 'border': '4px solid purple', 'border-radius': '10rem' });
                        }, (index - currentSlide) * 2000);
                    })(i);
                }
            }
        }, 2000);
    });

});