$(document).ready(function () {
    $("#menuIcon").click(function (e) {
        e.preventDefault();
        $(".mobile_menu").fadeIn();
    });
    $("#closeIcon").click(function (e) {
        e.preventDefault();
        $(".mobile_menu").fadeOut();
    });
});