
$(function () {

    $('.category').click(change);
    $('.back').click(back);


    function change() {
        $('.category').addClass('change');
        $(this).toggleClass('change');
        $(this).addClass('selected');

        $('header').animate({
            top: "-45px"
        }, 300);
        $('.back').animate({
            opacity: "1",
            visibility: "visible"
        }, 300);
        $(this).next().css({
            display: "block"
        });
        $(this).next().next().css({
            display: "block"
        });
        $('nav').animate({
            bottom: "-45px"
        }, 300);
    }

    function back() {
        $(this).hasClass('selected');
        $('.category').removeClass('change');
        $('.category').removeClass('selected');

        $('header').animate({
            top: "0"
        }, 300);
        $('.back').animate({
            opacity: "0",
            visibility: "hidden"
        }, 300);
        $('.category__wrapper strong').css({
            display: "none"
        });
        $('.category__box').css({
            display: "none"
        });
        $('nav').animate({
            bottom: "0"
        }, 300);
    }
});

