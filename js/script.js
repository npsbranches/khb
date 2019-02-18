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
