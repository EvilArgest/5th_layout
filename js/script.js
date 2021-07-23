$(document).ready(function(){
    $('.feedback__slider').slick({
        arrows:false,
        dots:true,
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 800,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        draggable: true,
        pauseOnFocus: false,
        pauseOnDotsHover: false,
        swipe: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows:false,
                    dots: true,
                    speed: 800,
                    autoplay: true,
                    autoplaySpeed: 5000,
                    pauseOnHover: false,
                    draggable: true,
                    pauseOnFocus: false,
                    pauseOnDotsHover: false,
                    swipe: true
                }
            }]
    });
});

$(document).ready(function (){
    $('.burger__menu').click(function(event){
        $('.burger__menu, .navigation').toggleClass('active');
    });
});