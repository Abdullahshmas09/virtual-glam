$(document).ready(function () {
    console.log("jQuery is working!");

    $("#login-button").click(function (e) {
        e.preventDefault();
        console.log("Login button clicked");

        // Hide login section and signup form, show signup section and login form
        $("#login-section, #signup-form-section").addClass("d-none");
        $("#signup-section,#login-form-section").removeClass("d-none");
    });

    $("#signup-button").click(function (e) {
        e.preventDefault();
        console.log("Signup button clicked");

        // Hide signup section and login form, show login section and signup form
        $("#signup-section, #login-form-section").addClass("d-none");
        $("#login-section, #signup-form-section").removeClass("d-none");
    });



    $("#forget").click(function (e) {
        e.preventDefault();
        console.log("Forget Password Clicked"); // Debugging
        $("#signup-section").removeClass("d-none");  // Show Login Form
        $("#forgot-password-section").removeClass("d-none"); // Show Forgot Password Form
        $("#login-form-section, #signup-form-section").addClass("d-none"); // Hide Signup
    });
});


