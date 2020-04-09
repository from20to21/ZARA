
$(function () {

    var firstScroll;
    var lastScroll;
    var positionY;
    var positionText;

    $(window).scroll(visualsizing);

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

    function visualsizing() {
        firstScroll = window.scrollY;
        positionY = firstScroll * 0.5
        positionText = firstScroll * 0.7

        if (firstScroll > lastScroll) {
            if (firstScroll > 0) {
                $('.visual__white').css({
                    opacity: firstScroll * 0.002,
                });
                $('.visual').css({
                    'background-position-y': positionY
                })
                $('.visual h1').css({
                    marginTop: positionText
                })
            }
            if (firstScroll > 538) {
                $('.category').css({
                    position: "fixed",
                    top: "45px",
                    zIndex: "100"
                });
            }
        }
        else {
            if (firstScroll < 538) {
                $('.visual h1').css({
                    marginTop: positionText
                })
                $('.visual').css({
                    'background-position-y': positionY
                })
                $('.visual__white').css({
                    opacity: firstScroll * 0.002,
                });
                $('.category').css({
                    position: "relative",
                    top: "0",
                    zIndex: "100"
                });
            }
        }
        lastScroll = firstScroll;
    }

});

