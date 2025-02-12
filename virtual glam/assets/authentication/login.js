$(document).ready(function () {
    console.log("jQuery is working!");

    $("#login-button").click(function (e) {
        e.preventDefault();
        console.log("Login button clicked");
        $("#login-section, #signup-form-section,#pending-email-section,#password-verification-section ").addClass("d-none");
        $("#signup-section, #login-form-section").removeClass("d-none");
    });

    $("#signup-button").click(function (e) {
        e.preventDefault();
        console.log("Signup button clicked");

        $("#signup-section, #login-form-section , #forgot-password-section,#pending-email-section ,#password-verification-section").addClass("d-none");
        $("#login-section, #signup-form-section").removeClass("d-none");
    });

    $("#forget").click(function (e) {
        e.preventDefault();
        $("#signup-section, #forgot-password-section").removeClass("d-none");
        $("#login-form-section, #signup-form-section,#pending-email-section,#password-verification-section ").addClass("d-none");
    });

    $("#signup-form-button").click(function (e) {
        e.preventDefault();
        $("#signup-form-section").addClass("d-none")
        $("#pending-email-section").removeClass("d-none")
    });
    $("#reset-password").click(function (e) {
        e.preventDefault();
        $("#forgot-password-section").addClass("d-none")
        $("#password-verification-section").removeClass("d-none")
    });
});
