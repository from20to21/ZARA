
$(function () {

    $('.category').click(category_slide);

    function category_slide() {
        if ($(this).next().hasClass('pop')) {
            $(this).next().toggleClass('pop');
        }
        else {
            $('.category').next().removeClass('pop');
            $(this).next().toggleClass('pop');
        }
    }
});

