
$(function () {

    var firstScroll;
    var lastScroll;

    $(window).scroll(visualsizing);

    function visualsizing() {
        firstScroll = window.scrollY;
        console.log(firstScroll);
        if (firstScroll > lastScroll) {
            if (firstScroll > 350) {
                $('.visual__white').animate({
                    opacity: 1
                }, 2000)
            }
            if (firstScroll > 538) {
                $('.category').css({
                    position: "fixed",
                    top: "45px",
                    zIndex: "100"
                })
            }
        }
        else {
            if (window.scrollY < 538) {
                $('.visual__white').animate({
                    opacity: 0
                }, 1000)
                $('.category').css({
                    position: "relative",
                    top: "0",
                    zIndex: "100"
                })
            }
        }
        lastScroll = firstScroll;
    }

    $('.category button').click(select);

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
});

