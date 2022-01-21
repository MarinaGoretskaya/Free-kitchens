$('.video-block__link').magnificPopup({
    type: 'iframe',

    iframe: {
        markup:
        '<div class="mfp-iframe-scaler">'+
        '<div class="mfp-close"></div>'+
        '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
        '</div>',

        patterns: {
            youtube: {
                index: 'youtube.com/',
                id: 'v=',
                src: 'https://www.youtube.com/embed/xBsbgDEoB1k'
            }
        },

        srcAction: 'iframe_src',
    }
});