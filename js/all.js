$(document).ready(function () {

    if ($(window).width() < 767) {
        $(".promoBar").text("6/15 當天全館享八折優惠，一同慶祝 Co-Founder Maddie 的生日！");
    } else {
        $(".promoBar").text("Celebrate our co-founder Madeline's birthday with us! 20% off for all items only on June 15th!");
    }

    $(window).resize(function () {
        if ($(window).width() < 767) {
            $(".promoBar").text("6/15 當天全館享八折優惠，一同慶祝 Co-Founder Maddie 的生日！");
        } else {
            $(".promoBar").text("Celebrate our co-founder Madeline's birthday with us! 20% off for all items only on June 15th!");
        }
    });

    // NAV
    $("#menuIcon").click(function (e) {
        e.preventDefault();
        $(".mobile_menu").animate({
            right: "0%"
        });
    });

    $("#closeIcon").click(function (e) {
        e.preventDefault();
        $(".mobile_menu").animate({
            right: "-60%"
        });
    });

    //PageLoad
    $(".animateShow").delay(1000).css({
        "opacity": "1",
        "margin-top": "0"
    });
});