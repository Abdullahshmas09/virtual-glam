$(document).ready(function () {
    // Handle form submission
    $("#myform").submit(function (e) { // Use "myform" here to match the HTML ID
        e.preventDefault();
        window.location.href = "/pending-email.html"
        // Capture form data
        const name = $("#name").val();
        const email = $("#email").val();
        const phone = $("#phone").val();
        const password = $("#password").val();
        const cpassword = $("#cpassword").val();

        // Log captured data to the console
        console.log("Form Data Captured:");
        console.log(`Name: ${name}`);
        console.log(`Email: ${email}`);
        console.log(`Phone: ${phone}`);
        console.log(`Password: ${password}`);
        console.log(`Confirm Password: ${cpassword}`);

        // Validate inputs
        if (name === "" || email === "" || phone === "" || password === "" || cpassword === "") {
            $("#result").html(`<p class="text-danger">All fields are required!</p>`);
            console.log("Validation Error: All fields are required.");
            return;
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            $("#result").html(`<p class="text-danger">Please enter a valid email address!</p>`);
            console.log("Validation Error: Invalid email format.");
            return;
        }

        if (password.length <= 7) {
            alert("Password length must be more than 7 characters");
            return;
        }



    });
});


//  login authentication
$(document).ready(function () {
    // Handle form submission
    $("#loginForm").submit(function (e) {
        e.preventDefault();

        // Capture form data

        const email = $("#email").val();
        const password = $("#password").val();


        // Log captured data to the console
        console.log("Form Data :");
        console.log(`Email: ${email}`);
        console.log(`Password: ${password}`);


        // Validate inputs
        if (email === "" || password === "") {
            $("#result").html(`<p class="text-danger">All fields are required!</p>`);
            console.log("Validation Error: All fields are required.");
            return;
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            $("#result").html(`<p class="text-danger">Please enter a valid email address!</p>`);
            console.log("Validation Error: Invalid email format.");
            return;
        }

        if (password.length <= 7) {
            alert("Password length must be more than 7 characters");
            return;
        }



    });
});

// forget authentication
$(document).ready(function () {
    // Handle form submission
    $("#forgetForm").submit(function (e) {
        e.preventDefault();

        // Capture form data

        const email = $("#email").val();



        // Log captured data to the console
        console.log("Form Data :");
        console.log(`Email: ${email}`);



        // Validate inputs
        if (email === "") {
            $("#result").html(`<p class="text-danger">please enter your email </p>`);
            console.log("Validation Error: All fields are required.");
            return;
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            $("#result").html(`<p class="text-danger">Please enter a valid email address!</p>`);
            console.log("Validation Error: Invalid email format.");
            return;
        }
    });
});
// new password authentication
$(document).ready(function () {
    // Handle form submission
    $("#newform").submit(function (e) {
        e.preventDefault();

        // Capture form data

        const newpassword = $("#newPassword").val();
        const confirmpassword = $("#confirmPassword").val();



        // Log captured data to the console
        console.log("Form Data :");
        console.log(`newpassword: ${newpassword}`);
        console.log(`confirmpassword: ${confirmpassword}`);
        if (!newpassword === confirmpassword) {
            alert("please fill the  same password")
            return
        }

        // Validate inputs
        if (newpassword === "" || confirmpassword === "") {
            $("#result").html(`<p class="text-danger">please fill in all the field </p>`);
            console.log("Validation Error: All fields are required.");
            return;
        }


    });
});