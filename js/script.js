$('.hero-tab-heading').click(function () {
    $(this).toggleClass('open').next().slideToggle();
    $('.hero-tab-heading').not(this).removeClass('open').next().slideUp();
    
})

$('.btn-bars').click(function(){
    $('.menu ul').toggleClass('active');
    $('.btn-bars').toggleClass('active');
})

$('.menu li a').click(function() {
    $('.menu ul').toggleClass('active');
    $('.btn-bars').toggleClass('active');
})


$(".menu").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href');
    var top = $(id).offset().top;

    $('body,html').animate({
        scrollTop: top
    }, 1500);
});
$(".footer-menu").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href');
    var top = $(id).offset().top;

    $('body,html').animate({
        scrollTop: top
    }, 1500);
});