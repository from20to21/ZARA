
$(function () {

    $('.category').click(change);

    function change() {

        $('.category').addClass('change');
        $(this).toggleClass('change');
        $(this).addClass('selected');

        $('header').animate({
            top: "-45px"
        }, 300)
        $('.back').animate({
            opacity: "1",
            visibility: "visible"
        }, 300)
        // var category_offset = $(this).offset().top - 50;
        // $('html,body').animate({
        //     scrollTop: category_offset
        // }, 500)
    }

    $('.back').click(back);

    function back() {
        $(this).hasClass('selected');
        $('.category').removeClass('change');
        $('.category').removeClass('selected');

        $('header').animate({
            top: "0"
        }, 300)
        $('.back').animate({
            opacity: "0",
            visibility: "hidden"
        }, 300)
    }
});

