$(document).ready(function(){
    var lastScroll;

    $(document).scroll(function(){
        var nav = $(".navbar");
        var scrollTop = $(document).scrollTop();
        if(lastScroll > scrollTop){
            nav.removeClass("navbar-custom-up");
            lastScroll = scrollTop;
        }else if(scrollTop >= $(document).height()/4){
            nav.addClass("navbar-custom-up");
            lastScroll = scrollTop;
        }
        
        if(scrollTop >= 250){
            nav.addClass("navbar-custom-dark");
        }else {
            nav.removeClass("navbar-custom-dark");
        }
    });
});
