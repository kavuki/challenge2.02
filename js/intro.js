//resource link: https://www.w3schools.com/jquery/default.asp

$(document).ready(function() {

    $(".box").hide();

    $("#show-hide").click(function(){
        $(".box").toggle();
    });

    $("#box").click(function(){
        $(".box").addClass("animate-box");

        setTimeout(function(){
            $(".box").removeClass("animate-box");
        },2000);
    });

    $("#name").click(function(){
        $(".box").addClass("color-box");

    });

    $("#reset").click(function(){
        $(".box").removeClass("color-box");
        $(".box").removeClass("animate-box");

    });
});