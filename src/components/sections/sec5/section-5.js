$('.catalog__slider').slick({
    infinite: true,
    initialSlide: 0,
    dots: false,
    arrows: true,
    prevArrow: '<div id="prev" class="arrow arrow-prev"></div>',
    nextArrow: '<div id="next" class="arrow arrow-next"></div>',
    slidesToShow: 6,
    slidesToScroll: 1,
    rows: 1,
    responsive: [
        {
            breakpoint: 1441,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                arrows: false,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                arrows: false,
            }
        },
        {
            breakpoint: 360,
            settings: {
                slidesToShow: 2,
                arrows: false,
            }
        }
    ]
});

// $('.slider-item').slick('slickNext');
