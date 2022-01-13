window.onscroll = function showHeader() {
    let headerBg = document.querySelector('.header .b-section__bg');

    if(window.pageYOffset > 70) {
        headerBg.classList.add('header-scroll');
    } else {
        headerBg.classList.remove('header-scroll');
    }
};