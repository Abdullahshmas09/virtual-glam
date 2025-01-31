jQuery(document).ready(function ($) {
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
            {
                breakpoint: 768, // Tablets
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: true, // Arrows remain for tablets
                },
            },
            {
                breakpoint: 576, // Small screens
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: true, // Disable arrows for smaller screens
                    
                },
            },
            {
                breakpoint: true, // Very small screens
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                },
            },
        ],
    });
});
$(document).ready(function () {
    $('#choose-modal').click(function () {
        $('#content1').hide();
        $('#content2').show();
    });
    $('#cross').click(function () {
        $('#content2').hide();
        $('#content1').show();
    });
});
$(document).ready(function () {
    let zoomLevel = 1; // Initial zoom level
    // Zoom in (progressively increase the size)
    $('#plus-btn').click(function () {
        zoomLevel += 0.1; // Increase zoom level
        $('#pic').css('transform', `scale(${zoomLevel})`);
        $('#pic').css('max-width', '100%'); // Ensure the image stays within the parent width
        $('#pic').css('max-height', '100%'); // Ensure the image stays within the parent height
    });
    // Zoom out (progressively decrease the size)
    $('#minus-btn').click(function () {
        if (zoomLevel > 0.5) { // Don't zoom out beyond 50% of original size
            zoomLevel -= 0.1; // Decrease zoom level
            $('#pic').css('transform', `scale(${zoomLevel})`);
            $('#pic').css('max-width', '100%'); // Ensure the image stays within the parent width
            $('#pic').css('max-height', '100%'); // Ensure the image stays within the parent height
        }
    });
});
// When you click the solid image
$("#solid1").click(function () {
    console.log('Clicked on #solid1');
    $("#pic").hide();
    $("#download-btn").hide()
    $("#plus-btn").hide()
    $("#first-slider").hide()
    $("#minus-btn").hide()
    $("#door").show()
    $("#door").css("z-index", "999");
    $("#cross").css("margin-top", "2rem");
    $("#undo").css("margin-top", "2rem");
    $("#slider-contaner").fadeIn();
});


$("#door").click(function (e) {
    e.preventDefault();
    $("#pic").show()
    $("#download-btn").show()
    $("#plus-btn").show()
    $("#first-slider").show()
    $("#minus-btn").show()
    $("#cross").css("margin-top", "0");
    $("#undo").css("margin-top", "0");
    $(this).hide()
});



//   slider,s javascript
function slide() {
    let slideValue = document.getElementById("slider").value;

    // Adjust opacity based on the slider value
    if (slideValue <= 50) {
        // Show first image, hide second image
        document.getElementById("image1").style.opacity = 1;
        document.getElementById("image2").style.opacity = 0;
    } else {
        // Show second image, hide first image
        document.getElementById("image1").style.opacity = 0;
        document.getElementById("image2").style.opacity = 1;
    }
}







