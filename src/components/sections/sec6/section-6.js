$('.team__slider').slick({
    infinite: true,
    initialSlide: 0,
    dots: false,
    arrows: true,
    prevArrow: '<div id="prev" class="arrow arrow-prev"></div>',
    nextArrow: '<div id="next" class="arrow arrow-next"></div>',
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});
