
$(function () {

    $('.category').click(change);

    function change() {
        if ($(this).hasClass('selected')) {
            $('.category').removeClass('change');
            $('.category').removeClass('selected');
        }
        else {
            $('.category').addClass('change');
            $(this).toggleClass('change');
            $(this).addClass('selected');
        }
        // var category_offset = $(this).offset().top - 50;
        // $('html,body').animate({
        //     scrollTop: category_offset
        // }, 500)
    }
});

