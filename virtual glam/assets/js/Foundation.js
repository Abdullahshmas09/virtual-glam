// Load header and footer dynamically
function loadContent(url, elementId) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            const element = document.getElementById(elementId);
            if (element) {
                element.innerHTML = data;
            } else {
                console.error(`${elementId} element not found`);
            }
        })
        .catch(error => console.error(`Error loading ${url}:`, error));
}
loadContent('header.html', 'header');
loadContent('Footer.html', 'footer');

// Slick slider setup for banner sliders
$(document).ready(function() {
    $('.bannerSlider, .bannerSlider1').each(function() {
        const isBannerSlider = $(this).hasClass('bannerSlider');
        $(this).slick({
            dots: false,
            arrows: true,
            infinite: true,
            speed: isBannerSlider ? 1000 : 3000,
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: isBannerSlider ? 1000 : 10000,
            responsive: [{
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


    // Modal toggle functionality
    $('#choose-modal').click(function() {
        $('#content1').hide();
        $('#content2').show();
    });

    $('#cross').click(function() {
        $('#content2').hide();
        $('#content1').show();
    });

    // Zoom functionality
    let zoomLevel = 1;
    $('#plus-btn').click(function() {
        zoomLevel += 0.1;
        $('#pic').css({ 'transform': `scale(${zoomLevel})`, 'max-width': '100%', 'max-height': '100%' });
    });

    $('#minus-btn').click(function() {
        if (zoomLevel > 0.5) {
            zoomLevel -= 0.1;
            $('#pic').css({ 'transform': `scale(${zoomLevel})`, 'max-width': '100%', 'max-height': '100%' });
        }
    });

    // Toggle elements on click
    $("#solid1").click(function() {
        $("#pic, #download-btn, #plus-btn, #first-slider, #minus-btn").hide();
        $("#door").show().css("z-index", "999");
        $("#cross, #undo").css("margin-top", "2rem");
        $("#slider-contaner").fadeIn();
    });

    $("#door").click(function(e) {
        e.preventDefault();
        $("#pic, #download-btn, #plus-btn, #first-slider, #minus-btn").show();
        $("#cross, #undo").css("margin-top", "0");
        $(this).hide();
    });

    // Palette, Powder, and Face-Palette selectors
    $("#palette, #powder, #face-palette").click(function(e) {

        const idMap = {
            "#palette": "#content-second",
            "#powder": "#content-first",
            "#face-palette": "#content-third",
        };
        const targetSection = idMap[this.id];
        $(this).css("border", "1px solid purple").siblings().css("border", "none");
        $(".content-section").addClass("d-none");
        $(targetSection).removeClass("d-none");
    });

    // Pattern Image Selector
    $("div[id$='pattern']").each(function() {
        $(this).on("click", "img", function() {
            $(this).siblings().css({ "border": "", "border-radius": "" });
            $(this).css({ "border": "3px solid purple", "border-radius": "1rem" });
        });
    });
    // Contour image pattern
    $("#content-first img, #content-second img, #content-third img").click(function() {
        $(this).siblings().css({ "border": "none" });
        $(this).css({ "border": "3px solid purple", "border-radius": "1rem" });
    });
    // Image border handling
    $('#single-color img , #double-color img , #tri-color img , #quad-color img').on('click', function() {
        $('#single-color img, #double-color img, #tri-color img, #quad-color img').css({
            "border": "none",
            "borderRadius": "0"
        });
        $(this).css({
            "border": "3px solid purple",
            "borderRadius": "1rem"
        });
    });

    // Handle button clicks
    $(".buttons-section button").click(function() {
        // Reset styles for all buttons
        $(".buttons-section button").css({
            "background": "",
            "color": "",
            "border": ""
        });

        // Apply styles to the clicked button
        $(this).css({
            "background": "#c6bed3",
            "color": "#61145a",
            "border": "none"
        });
    });



    // Image border handling
    $('.single-color img:not(.main-image), .double-color img:not(.main-image), .tri-color img:not(.main-image), .quad-color img:not(.main-image)').on('click', function() {
        $('.single-color img, .double-color img, .tri-color img, .quad-color img').css({
            "border": "none",
            "borderRadius": "0"
        });
        $(this).css({
            "border": "3px solid purple",
            "borderRadius": "1rem"
        });
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


function openColorPicker() {
    document.getElementById('color-picker').click();

}

$(document).ready(function() {
    const $colorPicker = $("#color-picker");
    const $addColorButton = $("#add-color-button");
    const $selectedColorsContainer = $("#selected-colors");
    const $selectedColorsInput = $("#selected-colors-input");

    // Array to store selected colors
    let selectedColors = [];

    // Function to update the hidden input with selected colors
    function updateSelectedColorsInput() {
        $selectedColorsInput.val(selectedColors.join(","));
    }


    let maxColors = 1;

    // Function to set the maximum number of colors based on the button clicked
    function setMaxColors(limit) {
        maxColors = limit;

    }

    // Function to add a color
    function addColor(color) {
        if (selectedColors.length >= maxColors) {
            return;
        }

        if (!selectedColors.includes(color)) {
            selectedColors.push(color);
            const $colorBox = $("<div>").addClass("color-box").css("background-color", color);
            const $removeButton = $("<div>")
                .addClass("remove-color")
                .html("×")
                .on("click", function() {
                    selectedColors = selectedColors.filter(c => c !== color);
                    $colorBox.remove();
                    updateSelectedColorsInput();
                });

            $colorBox.append($removeButton);
            $selectedColorsContainer.append($colorBox);
            updateSelectedColorsInput();
        }
    }
    $("#single").click(function(e) {
        e.preventDefault();
        setMaxColors(1);
    });

    $("#dual").click(function(e) {
        e.preventDefault();
        setMaxColors(2);
    });

    $("#tripple").click(function(e) {
        e.preventDefault();
        setMaxColors(3);
    });

    $("#quad").click(function(e) {
        e.preventDefault();
        setMaxColors(4);
    });

    $colorPicker.on("input", function() {
        const color = $(this).val();
        addColor(color);
    });
});

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;

    // Get all tab content elements and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all tab link elements and remove "active" class
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    // Show the selected tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.classList.add("active");
}

// Show the first tab by default on page load
document.addEventListener("DOMContentLoaded", function() {
    var defaultTab = document.getElementsByClassName("tablinks")[0];
    if (defaultTab) {
        defaultTab.click(); // Simulate a click to open the first tab
    }
});