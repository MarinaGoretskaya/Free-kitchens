$(document).ready(function() {
    $('a.menu-botton').click(function (event) {
        event.preventDefault();
        $('.menu').fadeIn(400, function () {
            $('.menu')
                .css('display', 'block')
        });
    });

    jQuery(function($){
        $(document).mouseup(function (e) {
            let div = $('.menu');
            if (!div.is(e.target)
                && div.has(e.target).length === 0) {
                div.hide();
            }
        });
    });
})