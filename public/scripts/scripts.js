//
//		preloader
//
$(document).ready(() => {
    $(document).on("ready",function(){
        $(".contenedor_icon_menu").on("click",function(){
            $(".icono_menu").toggleClass("cruz");
        });
    });

    $("header,div,footer").hide();
    $("div:nth-child(1)").show();
    $("#hidden").delay(4500).slideUp(1500);
    $("#hidden span").delay(5000).slideUp(2000);

    setTimeout(function(){
        $("header,div,footer").show();
    },4500);
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