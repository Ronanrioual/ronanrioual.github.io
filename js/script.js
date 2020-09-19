$(function(){

    $(".navbar a, footer a").on("click", function(event){
        event.preventDefault();
        var hash = this.hash;

        $('body,html').animate({scrollTop: $(hash).offset().top} , 900 , function(){window.location.hash = hash;})
    });
})

$(function(){

    $('#color-choice > button').click(function(){
        var style = $(this).attr('value');

    $('.color').attr('href', style);

    });
})

$(document).ready(function() {
    $(document).on('click', '#color-choice > button' ,function () {
        $('#color-choice > button').removeClass("active");
        $(this).addClass("active");
    });
});

/*$(function(){

    $('#color-choice > button').click(function(){
        var color = $(this).attr('value');

    $(color).css('backgroundColor', color);
    $('#experience').css('backgroundColor', color);
    $('#about').css('backgroundColor', color);
    $('.navbar').css('backgroundColor', color);
    $('.timeline li .timeline-badge').css('color', color);
    $('.timeline-heading h4').css('color', color);
    $('.divider').css('backgroundColor', color);
    $('.button1:hover').css('color', color);
    $('#skills .heading h2').css('color', color);
    $('#skills .progress-bar').css('backgroundColor', color);
    $('#education .heading h2').css('color', color);
    $('.education-block h3').css('color', color);
    $('#portfolio').css('background', color);
    $('#recommandation .heading h2').css('color', color);
    $('.carousel-control.left, .carousel-control.right').css('color', color);
    $('.carousel-indicators li').css('borderColor', color);
    $('.carousel-indicators li.active').css('backgroundColor', color);
    $('footer .glyphicon').css('color', color);
    $('#myCarousel .item h3').css('color', color);
    $('.navbar-nav li a:hover').css('color', color + ' !important');
    $('.navbar-nav li.active a').css('color', color + ' !important');
    });
})*/