$(document).ready(function () {
    let htmlFile = document.location.href.match(/[^\/]+$/)[0];
    let ulArray = document.querySelectorAll(".photoUL");
    let ulArrayMobile = document.querySelectorAll(".photoUL_mobile");
    const observer = lozad();
    observer.observe();
    let deskHasCreated = false;
    let mobileHasCreated = false;

    if (htmlFile === "gallery.html") {
        function createImage(count) {
            if ($(window).width() < 767) {
                //循環創建
                if (!deskHasCreated) {
                    for (let i = 0; i < count; i++) {
                        //創建圖片和 li
                        let imgM = document.createElement("img");
                        imgM.classList.add("lozad", "imageSlide");
                        imgM.classList.add("img" + i);
                        imgM.src = "../img/gallery/" + i + ".jpg";

                        let liM = document.createElement("li");
                        let aM = document.createElement("a");
                        aM.href = "#";

                        liM.appendChild(aM);
                        aM.appendChild(imgM);

                        // 假設一個最短的ul
                        let minHeightUlMobile = ulArrayMobile[0];

                        for (let j = 0; j < ulArrayMobile.length; j++) {
                            if (minHeightUlMobile.offsetHeight > ulArrayMobile[j].offsetHeight) {
                                minHeightUlMobile = ulArrayMobile[j];
                            }
                        }
                        minHeightUlMobile.appendChild(liM);
                    }
                    deskHasCreated = true;
                }
            } else {
                if (!mobileHasCreated) {
                    //循環創建
                    for (let i = 0; i < count; i++) {
                        //創建圖片和 li
                        let img = document.createElement("img");
                        img.classList.add("lozad", "imageSlide");
                        img.classList.add("img" + i);
                        img.src = "../img/gallery/" + i + ".jpg";

                        let li = document.createElement("li");
                        let a = document.createElement("a");
                        a.href = "#";
                        li.appendChild(a);
                        a.appendChild(img);

                        // 假設一個最短的ul
                        let minHeightUl = ulArray[0];

                        for (let j = 0; j < ulArray.length; j++) {
                            if (minHeightUl.offsetHeight > ulArray[j].offsetHeight) {
                                minHeightUl = ulArray[j];
                            }
                        }
                        minHeightUl.appendChild(li);
                    }
                    mobileHasCreated = true;
                }
            }
        }
        createImage(54);
    }
    $(window).resize(function () {
        if ($(window).width() < 767) {
            if (htmlFile === "gallery.html") {
                createImage(54);
            }
        } else {
            if (htmlFile === "gallery.html") {
                createImage(54);
            }
        }
    });

    let imgLength = $('.imageSlide').length;
    let currentImageNum;
    $(".imageSlide").click(function (e) {
        e.preventDefault();
        $("body").addClass("lockedScroll");
        $(".lightBoxSec").fadeIn();
        let currentImageClassName = $(this).attr('class');
        currentImageNum = currentImageClassName.split("img").pop();
        changeCurrentImage(currentImageNum);
    });

    $(".closeLightBoxIcon").click(function (e) {
        e.preventDefault();
        $(".lightBoxSec").fadeOut();
        $("body").removeClass("lockedScroll");
    });

    $(".leftIcon").click(function (e) {
        e.preventDefault();
        if (0 < currentImageNum && currentImageNum < imgLength) {
            currentImageNum--;
            changeCurrentImage(currentImageNum);
        } else if (currentImageNum === 0) {
            currentImageNum = imgLength - 1;
            changeCurrentImage(currentImageNum);
        };
    });

    $(".rightIcon").click(function (e) {
        e.preventDefault();
        if (0 <= currentImageNum && currentImageNum < imgLength - 1) {
            currentImageNum++;
            changeCurrentImage(currentImageNum);
        } else if (currentImageNum === imgLength - 1) {
            currentImageNum = 0;
            changeCurrentImage(currentImageNum);
        };
    });

    function changeCurrentImage(currentImageNum) {
        if (htmlFile === "gallery.html") {
            $("#currentBigPhoto").attr("src", "../img/gallery/" + currentImageNum + ".jpg");
        } else if (htmlFile === "art.html") {
            $("#currentBigPhoto").attr("src", "../img/art/" + currentImageNum + ".jpg");
        } else {
            $("#currentBigPhoto").attr("src", "../img/doing/" + currentImageNum + ".jpg");
        }
    }
});