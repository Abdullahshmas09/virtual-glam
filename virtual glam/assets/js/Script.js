$(document).ready(function() {
    function loadContent(url, elementId) {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                const element = document.getElementById(elementId);
                if (element) {
                    element.innerHTML = data;
                }
            })
    }
    loadContent('header.html', 'header');
    loadContent('Footer.html', 'footer');

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
                breakpoint: 1024, // Large tablets & small laptops
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    arrows: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: false,
                },
            },
            {
                breakpoint: 600, // Large mobile screens
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                },
            },
            {
                breakpoint: 400, // Small mobile screens
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                },
            },
        ],
    });


    $(document).ready(function() {
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
                    breakpoint: 768, // Tablets & medium screens
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        arrows: false, // Hide arrows on tablets
                    },
                },
                {
                    breakpoint: 600, // Large mobile screens
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 400, // Small mobile screens
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        arrows: false, // Hide arrows for a cleaner UI
                    },
                },
            ],
        });


        // Map image IDs to corresponding sections
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

        // Function to apply styles and show/hide sections
        function applyStyles(imgId) {
            $(".bannerSlider1 .slick-slide img").css({
                "border": "none",
                "border-radius": ""
            });
            $("#lip-color, #lip-liner, #eye-color, #contour, #eye-shadow, #eye-liner, #eye-lash, #bronzer, #concealer, #blush, #foundation").hide();

            if (idMap[imgId]) {
                $(idMap[imgId]).show().removeClass("d-none");
                $("#" + imgId).css({
                    "border": "5px solid purple",
                    "border-radius": "10rem"
                });
            }
        }

        // Handle click events on .bannerSlider1 images
        $(document).on("click", ".bannerSlider1 img", function() {
            applyStyles(this.id);
        });

        // Automatic animation logic
        let slides = $('.bannerSlider1 .slick-slide img');
        let currentIndex = 0;
        let reverse = false;
        let delay = 2000;

        function animate() {
            applyStyles(slides[currentIndex].id); // Apply styles using image ID

            setTimeout(function() {
                if (reverse) {
                    currentIndex--;
                    if (currentIndex < 0) {
                        reverse = false;
                        currentIndex = 1;
                    }
                } else {
                    currentIndex++;
                    if (currentIndex >= slides.length) {
                        reverse = true;
                        currentIndex = slides.length - 2;
                    }
                }
                animate();
            }, delay);
        }

        animate();
    });
});