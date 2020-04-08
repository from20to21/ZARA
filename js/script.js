
$(function () {

    $('h1').animate({
        opacity: "1",
        top: "40%"
    }, 1000);
    $('h2').delay(500).animate({
        opacity: "1",
        top: "55%"
    }, 1000);

    $('.category button').click(select);

    function select() {
        $('.category button strong').removeClass('category__selected');
        $(this).find('strong').addClass('category__selected');
    }

});

