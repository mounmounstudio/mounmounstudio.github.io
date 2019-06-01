let htmlFile = document.location.href.match(/[^\/]+$/)[0];
let ulArray = document.querySelectorAll(".photoUL");
const observer = lozad();
observer.observe();

if (htmlFile === "gallery.html") {
    function createImage(count) {
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
    }

    createImage(54);
}

// Click this image (jQuery)
$(document).ready(function () {
    let imgLength = $('.imageSlide').length;
    let currentImageNum;
    $(".imageSlide").click(function (e) {
        e.preventDefault();
        $("body").addClass("lockedScroll");
        $(".lightBoxSec").fadeIn();
        let currentImageClassName = $(this).attr('class');
        currentImageNum = currentImageClassName.split("img").pop();
        changeCurrentImage(currentImageNum);
        console.log(currentImageNum);
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