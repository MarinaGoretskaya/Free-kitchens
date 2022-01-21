$('.tizers__slider').slick({
    infinite: true,
    initialSlide: 0,
    dots: false,
    arrows: false,
    slidesPerRow: 3,
    // slidesToShow: 3,
    slidesToScroll: 1,
    rows: 2,
    responsive: [

        {
            breakpoint: 768,
            settings: {
                slidesPerRow: 3,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesPerRow: 3,

            }
        },
        {
            breakpoint: 360,
            settings: {
                slidesPerRow: 1,
            }
        }
    ]

});
