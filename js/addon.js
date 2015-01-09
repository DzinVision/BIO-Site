$(document).ready(function() {
    if ($(document).width() < 640) {
        $("#nav").removeClass("uk-width-2-10");
        $("#nav").addClass("uk-width-1-1");
        $("#content").removeClass("uk-width-8-10");
        $("#content").addClass("uk-width-1-1");
        $("#nav").addClass("uk-text-center");
        $("#nav").css("margin-bottom", "-15px");
        $(".uk-overlay-caption").addClass("overlay-caption");
        $(".overlay-caption").removeClass("uk-overlay-caption");
    }
    
    $(".navigation li a").click(function() {
        $(this).blur();
    });
});
