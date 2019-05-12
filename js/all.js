$(document).ready(function () {
    // NAV
    $("#menuIcon").click(function (e) {
        e.preventDefault();
        $(".mobile_menu").fadeIn();
    });
    $("#closeIcon").click(function (e) {
        e.preventDefault();
        $(".mobile_menu").fadeOut();
    });
    //PageLoad
    $(".animateShow").delay(1000).css({
        "opacity": "1",
        "margin-top": "0"
    });
});