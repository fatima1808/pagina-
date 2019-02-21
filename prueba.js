(function ($) {
    var imgLeft1 = $("#img-left-1");
    var imgLeft2 = $("#img-left-2");
    var imgLeft3 = $("#img-left-3");
    var imgRight1 = $("#img-right-1");
    var imgRight2 = $("#img-right-2");
    var textBlock1 = $("#text-block-1");
    var textBlock2 = $("#text-block-2");
    var textBlock3 = $("#text-block-3");
    var imgContainerLeft = $(".img-container-left");
    var imgContainerRight = $(".img-container-right");
    var contElem = $("#contenedor-paralax");
    var imgContainer = $(".img-container");
    var contImg3 = $("#contenedor-img-3");

    $(window).scroll(function (event) {
        var windowWidth = $(window).width();
        if (windowWidth > 572) {
            var scrollPos = $(window).scrollTop();
            var containerHeight = contElem.height();
            if (scrollPos > contElem.offset().top + contElem.height() - imgContainer.height()) {
                imgContainer.css({ "position": "absolute", "transform": "translateX(0px)", "top": contElem.offset().top + contElem.height() - imgContainer.height() });
                contImg3.removeClass("fixed-important");
                contImg3.css({ "position": "absolute", "top": contElem.offset().top + contElem.height() - imgContainer.height() });
            } else if (scrollPos >= contElem.offset().top && scrollPos < contElem.offset().top + contElem.height()) {
                imgContainer.css({ "position": "fixed", "top": 0 });
                if (scrollPos <= textBlock2.offset().top) {
                    imgContainerLeft.css({ "transform": "translateX(0px)" });
                    imgContainerRight.css({ "transform": "translateX(0px)" });
                    imgLeft1.css({ "opacity": 1 });
                    imgLeft2.css({ "opacity": 0 });
                    imgLeft3.css({ "opacity": 0 });
                    imgRight1.css({ "opacity": 1 });
                    imgRight2.css({ "opacity": 0 });

                } else {
                    imgContainerLeft.css({ "transform": "translateX(" + (((scrollPos - textBlock2.offset().top) / (imgContainer.height() )) * (windowWidth * 0.2)   ) + "px)" });
                    imgContainerRight.css({ "transform": "translateX(" + (-(((scrollPos - textBlock2.offset().top) / (imgContainer.height() )) * (windowWidth * 0.2 )) ) + "px)" });

                    imgLeft1.css({ "opacity": 1 });
                    imgLeft2.css({ "opacity": 0 });
                    imgLeft3.css({ "opacity": 0 });
                    imgRight1.css({ "opacity": 1 });
                    imgRight2.css({ "opacity": 0 });

                    if (scrollPos >= textBlock3.offset().top - imgContainer.height() / 5) {
                        imgLeft1.css({ "opacity": 0 });
                        imgLeft2.css({ "opacity": 0 });
                        imgLeft3.css({ "opacity": 1 });
                        imgRight1.css({ "opacity": 0 });
                        imgRight2.css({ "opacity": 0 });
                        contImg3.css({ "top": 0 });
                        contImg3.addClass("fixed-important");
                    }
                }
            } else {
                console.log("tetgegrtg");
                imgContainer.css({ "position": "absolute", "top": contElem.offset().top });
            }
        } else {
            imgLeft1.css({ "opacity": 0 });
            imgLeft2.css({ "opacity": 0 });
            imgLeft3.css({ "opacity": 0 });
            imgRight1.css({ "opacity": 0 });
            imgRight2.css({ "opacity": 0 });

        }
    })
})($);