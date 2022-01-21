$('.rent-tabs__item').click(function (e) {
    e.preventDefault();

    $('.rent-tabs__item').removeClass('item-active');
    $('.rent-tabs__block').removeClass('block-active');

    $(this).addClass('item-active');
    $($(this).children('.rent-tabs__link').attr('href')).addClass('block-active');
});

$('.rent-tabs__link:first').click();



$('.rent__slider').slick({
    infinite: true,
    initialSlide: 0,
    dots: false,
    arrows: true,
    prevArrow: '<div id="prev" class="arrow arrow-prev"></div>',
    nextArrow: '<div id="next" class="arrow arrow-next"></div>',
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                arrows: false,
                centerMode: false,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                arrows: false,
                centerMode: false,
            }
        },
        {
            breakpoint: 360,
            settings: {
                slidesToShow: 1,
                arrows: false,
                centerMode: false,
            }

        }
    ]
});


