// Load header and footer dynamically
$(document).ready(function() {


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
        $("#image-content").show();
        $("#actions").show();
    });

    $("#cross").click(function(e) {
        e.preventDefault();
        $("#image-content ,#actions, #content2").hide();
        $('#content1').show();
    });






    // Click on an image to show content2 and display the selected image

    $(".virtual-box-images img").click(function(e) {
        e.preventDefault();
        // Get the clicked image's source
        let imgSrc = $(this).attr("src");
        // Hide image-content and show content2
        $("#image-content").hide();
        $("#content2").show();
        // Replace only the image inside #content2 while keeping other content
        $("#content2 .image-wrapper").html(`<img src="${imgSrc}" alt="Selected Model" class="img-fluid">`);
    });


    // Zoom functionality
    let zoomLevel = 1;
    $('#plus-btn').click(function() {
        zoomLevel += 0.1;
        $('.image-wrapper').css({ 'transform': `scale(${zoomLevel})`, 'max-width': '100%', 'max-height': '100%' });
    });

    $('#minus-btn').click(function() {
        if (zoomLevel > 0.5) {
            zoomLevel -= 0.1;
            $('.image-wrapper').css({ 'transform': `scale(${zoomLevel})`, 'max-width': '100%', 'max-height': '100%' });
        }
    });

    // Toggle elements on click
    // $("#solid1").click(function() {
    //     $(".image-wrapper, #download-btn, #plus-btn, #first-slider, #minus-btn").hide();
    //     $("#slider-contaner").fadeIn().css("display", "flex");
    //     $("#door").show().css("z-index", "999");
    //     $("#cross, #undo").css("margin-top", "2rem");
    // });
    // $("#door").click(function(e) {
    //     e.preventDefault();
    //     $("#pic, #download-btn, #plus-btn, #first-slider, #minus-btn").show();
    //     $("#cross, #undo").css("margin-top", "0");
    //     $(this).hide();
    // });

    // Palette, Powder, and Face-Palette selectors

    // Add click event listeners to the images with IDs #powder, #palette, and #face-palette
    $("#powder, #palette, #face-palette").click(function() {
        // Map the IDs of the clicked images to the IDs of the content sections
        const idMap = {
            "#powder": "#content-first",
            "#palette": "#content-second",
            "#face-palette": "#content-third",
        };
        const targetSection = idMap[`#${this.id}`];
        $("#powder, #palette, #face-palette").css("border", "none");
        $(this).css("border", "2px solid purple");
        $(".dual-content, #content-first").addClass("d-none");
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



    const $colorPicker = $("#color-picker"); // Hidden color picker input
    const $selectedColorsContainer = $("#selected-colors"); // Container for selected colors
    const $selectedColorsInput = $("#selected-colors-input"); // Hidden input to store selected colors
    const $colorPickerTrigger = $("#color-picker-trigger"); // Image to trigger the color picker

    let selectedColors = []; // Array to store selected colors
    let maxColors = 1; // Maximum number of selectable colors

    // Function to update the hidden input with selected colors
    const updateSelectedColorsInput = () => {
        $selectedColorsInput.val(selectedColors.join(","));
    };

    // Function to add a color to the selected colors list
    const addColor = (color) => {
        if (selectedColors.length >= maxColors) {
            return;
        }

        if (!selectedColors.includes(color)) {
            selectedColors.push(color);

            // Create a color box element
            const $colorBox = $("<div>")
                .addClass("color-box")
                .css("background-color", color);

            // Create a remove button
            const $removeButton = $("<div>")
                .addClass("remove-color")
                .html("×")
                .on("click", function() {
                    selectedColors = selectedColors.filter((c) => c !== color);
                    $colorBox.remove();
                    updateSelectedColorsInput();
                });

            $colorBox.append($removeButton);
            $selectedColorsContainer.append($colorBox);
            updateSelectedColorsInput();
        }
    };

    // Trigger the color picker when the image is clicked
    $colorPickerTrigger.on("click", function() {
        $colorPicker.trigger("click"); // Programmatically click the color picker input
    });

    // Handle color selection from the color picker
    $colorPicker.on("input", function() {
        const color = $(this).val(); // Get the selected color
        addColor(color); // Add the color to the selected colors list
    });

    // Event listeners for tab buttons
    $("#single").on("click", function(e) {
        e.preventDefault();
        setMaxColors(1);
        resetSelectedColors();
    });

    $("#dual").on("click", function(e) {
        e.preventDefault();
        setMaxColors(2);
        resetSelectedColors();
    });

    $("#tripple").on("click", function(e) {
        e.preventDefault();
        setMaxColors(3);
        resetSelectedColors();
    });

    $("#quad").on("click", function(e) {
        e.preventDefault();
        setMaxColors(4);
        resetSelectedColors();
    });

    // Function to set the max number of colors
    const setMaxColors = (limit) => {
        maxColors = limit;
    };

    // Function to reset selected colors and UI
    const resetSelectedColors = () => {
        selectedColors = [];
        $selectedColorsContainer.empty();
        updateSelectedColorsInput();
    };
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
$(document).ready(function() {
    let previousSection = 1;
    let currentSection = 1;

    function showSection(sectionNumber) {
        $('#content1, #actions, #image-content, #content2').hide();

        if (sectionNumber === 1) {
            $('#content1').show();
        } else if (sectionNumber === 2) {
            $('#actions, #image-content').show();
        } else if (sectionNumber === 3) {
            $('#content2 , #actions').show();
        }

        previousSection = currentSection;
        currentSection = sectionNumber;
    }

    // Initially show content1
    showSection(1);

    // Choose a Model → Goes to Image Selection (Section 2)
    $('#choose-modal').click(function() {
        showSection(2);
    });

    // Clicking on an Image → Goes to Content 2 (Section 3)
    $('.virtual-box-images img').click(function() {
        showSection(3);
    });

    // Undo Button → Goes back to the previous section
    $("#undo").click(function(e) {
        e.preventDefault();
        if (currentSection === 3) {
            showSection(2); // From content2 → image-content
        } else if (currentSection === 2) {
            showSection(1); // From image-content → content1
        }
    });
});

function openColorPicker() {
    document.getElementById('color-picker').click();
}