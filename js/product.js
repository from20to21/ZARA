
$(function () {

    $('.visual h2').delay(500).animate({
        opacity: "1",
        bottom: "20px"
    }, 1500);

    $('.category button').click(select);

    $('.heart').click(like);

    function select() {
        $('.category button strong').removeClass('category__selected');
        $(this).find('strong').addClass('category__selected');
        var categoryWidth = $(this).find('strong').innerWidth();
        var categoryOffset = $(this).find('strong').offset();

        $('.category span').animate({
            width: categoryWidth,
            left: categoryOffset.left
        });
    }

    function like() {
        $(this).find('img').toggleClass('pink');
    }
});

