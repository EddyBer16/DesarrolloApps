//
//		preloader
//
$(function(){
    $('body').hide().slideDown(1500);
})
$(document).ready(() => {
    $(document).on("ready",function(){
        $(".contenedor_icon_menu").on("click",function(){
            $(".icono_menu").toggleClass("cruz");
        });
    });
});

$("document").ready(function(){
    
    $("#logo .contenedor_icon_menu").click(function(){
        $("nav").toggleClass("nav_toggle");
        $(".nav_toggle").css({
            "transition":" .5s"
        });
        $("#logo").toggleClass("logo-scroll");
    });
});