
$(function () {

    var bln = true;

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


    $('.header__search').click(search);

    $('.search__close').click(close);

    $('.search__gender button').click(open);
    $('.search__category button').click(open);

    $('.search__gender p').click(cat_change);
    $('.search__category p').click(cat_change);

    function cat_change() { //for gender/category change in search menus
        bln = true;
        var target = $(this).text();
        $(this).parent().find('button').html(target + '<../img src="img/download.png" alt="">');
        $(this).parent().find('p').fadeOut(500); //list close
    }

    function open() {
        if (bln) {
            bln = false;
            $(this).parent().find('p').css({
                display: "flex",
                transform: "translate(-5%, 0)"
            }, 500);
            $(this).parent().find('p').animate({
                opacity: 1
            });
            $(this).find('img').css({
                transform: "rotate(180deg)"
            })
        }
        else {
            bln = true;
            $('.search__gender').find('p').css({
                display: "none",
                transform: "translate(-5%, -50px)"
            }, 500);
            $('.search__gender').find('p').animate({
                opacity: 0
            });
            $('.search__gender').find('button').find('img').css({
                transform: "rotate(0deg)"
            })
            $('.search__category').find('p').css({
                display: "none",
                transform: "translate(-5%, -50px)"
            }, 500);
            $('.search__category').find('p').animate({
                opacity: 0
            });
            $('.search__category').find('button').find('img').css({
                transform: "rotate(0deg)"
            })
        }
    }

    function search() {
        $('html').addClass("search");
        $('.wrap').addClass("search");

        $('.search__close').css({
            display: "block"
        }, 500);
        $('.search__close').delay(500).animate({
            opacity: 1
        });
        $(this).find('input').css({
            display: "block"
        }, 500);
        $(this).find('input').delay(500).animate({
            opacity: 1
        });
        $('.header__shopping').animate({
            opacity: 0
        }, 500);
        $('.header__shopping').delay(500).css({
            display: "none"
        });
        $('header').animate({
            height: "100vh"
        })
        $('.search__keyword').css({
            display: "flex"
        }, 500);
        $('.search__keyword').delay(500).animate({
            opacity: 1
        });
    }
    function close() {
        $('html').removeClass("search");
        $('.wrap').removeClass("search");
        $('.search__category').find('button').html('CATEGORY<img src="img/download.png" alt="">');

        $('.search__close').css({
            display: "none"
        }, 500);
        $('.search__close').delay(500).animate({
            opacity: 0
        });
        $('.header__search').find('input').css({
            display: "none"
        }, 500);
        $('.header__search').find('input').delay(500).animate({
            opacity: 0
        });
        $('.header__shopping').animate({
            opacity: 1
        }, 500);
        $('.header__shopping').delay(500).css({
            display: "block"
        });
        $('header').animate({
            height: "45px"
        })
        $('.search__keyword').css({
            display: "none"
        }, 500);
        $('.search__keyword').delay(500).animate({
            opacity: 0
        });
        $('.search__category p').css({
            display: "none",
            transform: "translate(-5%, -50px)"
        }, 500);
        $('.search__category p').animate({
            opacity: 0
        });
    }
});

