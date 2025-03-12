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
    let slider = $('.bannerSlider1').slick({
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

    let slides = $('.bannerSlider1 .slick-slide img');
    let currentIndex = 0;
    let delay = 2000;
    let animationActive = true;

    function animate() {
        if (!animationActive) return;

        applyStyles(slides[currentIndex].id);

        setTimeout(function() {
            if (!animationActive) return;

            currentIndex++;

            if (currentIndex >= slides.length) {
                currentIndex = 0;
                $(".bannerSlider1").slick("slickGoTo", 0);
            } else {
                $(".bannerSlider1").slick("slickGoTo", currentIndex);
            }

            animate();
        }, delay);
    }

    function stopAnimation() {
        animationActive = false;
        $(".bannerSlider1").slick("slickPause");
    }

    $(document).on("click", ".bannerSlider1 img", function() {
        applyStyles(this.id);
        stopAnimation();
    });

    animate();


});