
$(function () {

    var firstScroll, lastScroll = 0,
        positionVisual, positionText,
        positionNew, positionCollection,
        positionBest, num;

    $(window).scroll(parallax);

    $('.category button').click(select);

    $('.heart').click(like);



    $('.new__itemWrapper').draggable({
        axis: "x"
    });
    $('.new__itemWrapper').bind("drag", indicator);

    function indicator() {
        num = $(this).find('div').length;
        sc = $(this).scrollLeft();
        console.log($(this).pageX);
        $(this).parent().next().find('span').css({
            width: sc
        });
    }

    //     $(this).scrollLeft(sc);

    //     if (bln) {
    //         bln = false;
    //         if (firstScroll > lastScroll) {
    //             sc += 160;
    //             setTimeout(function () {
    //                 bln = true;
    //             }, 800);
    //         }
    //         else {
    //             sc -= 160;
    //             setTimeout(function () {
    //                 bln = true;
    //             }, 800);
    //         }
    //     }

    //     lastScroll = firstScroll;
    // }

    function parallax() {
        firstScroll = window.scrollY;
        positionVisual = firstScroll * 0.5;
        positionText = firstScroll * 0.7;
        positionNew = firstScroll * (-0.1);
        positionCollection = firstScroll * -0.2 + 320;
        positionBest = firstScroll * -0.2 + 250;

        if (firstScroll > lastScroll) {
            $('.visual__white').css({
                opacity: firstScroll * 0.002,
            });
            $('.visual').css({
                'background-position-y': positionVisual
            });
            $('.new').css({
                'background-position-y': positionNew,
            });
            $('.collection').css({
                'background-position-y': positionCollection
            });
            $('.bestseller').css({
                'background-position-y': positionBest
            });
            $('.visual h1').css({
                marginTop: positionText
            });
            if (firstScroll > 538) {
                $('header').css({
                    display: "none"
                });
                $('.new').css({
                    marginTop: "120px"
                });
                $('.category').css({
                    position: "fixed",
                    top: "0",
                    zIndex: "100"
                });
            }
            if (firstScroll > 2400) {
                $('.stories h3').addClass('effect')
            }

        }
        else {
            $('.visual').css({
                'background-position-y': positionVisual
            });
            $('.new').css({
                'background-position-y': positionNew,
            });
            $('.collection').css({
                'background-position-y': positionCollection
            });
            $('.bestseller').css({
                'background-position-y': positionBest
            });
            if (firstScroll < 538) {
                $('header').css({
                    display: "block"
                });
                $('.new').css({
                    marginTop: "70px"
                });
                $('.visual h1').css({
                    marginTop: positionText
                });
                $('.visual__white').css({
                    opacity: firstScroll * 0.002,
                });
                $('.category').css({
                    position: "relative",
                    top: "0",
                    zIndex: "100"
                });
            }
            else {
                $('header').css({
                    display: "block"
                });
                $('.category').css({
                    position: "fixed",
                    top: "45px",
                    zIndex: "100"
                });
            }
            if (firstScroll < 2400) {
                $('.stories h3').removeClass('effect')
            }
        }
        lastScroll = firstScroll;
    }

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

