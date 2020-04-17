
$(function () {

    var firstScroll, lastScroll,
        positionVisual, positionText,
        positionNew, positionCollection,
        positionBest, bln = true;

    $(window).scroll(parallax);

    $('.category button').click(select);

    $('.heart').click(like);

    $('.header__search').click(search);

    $('.search__close').click(close);

    $('.search__gender button').click(open);

    $('.search__gender p').click(cat_change);

    function cat_change() {
        var target = $(this).text();

        $('.search__gender button').html(target + '<img src="img/download.png" alt="">');

        $('.search__gender p').css({
            display: "none",
            transform: "translate(-5%, -50px)"
        }, 500);
        $('.search__gender p').animate({
            opacity: 0
        });
    }

    function open() {
        if (bln) {
            bln = false
            $('.search__gender p').css({
                display: "flex",
                transform: "translate(-5%, 0)"
            }, 500);
            $('.search__gender p').animate({
                opacity: 1
            });
        }
        else {
            bln = true;
            $('.search__gender p').css({
                display: "none",
                transform: "translate(-5%, -50px)"
            }, 500);
            $('.search__gender p').animate({
                opacity: 0
            });
        }
    }

    function search() {
        $('html').addClass("search");
        $('.wrap').addClass("search");

        $(this).animate({
            marginLeft: "80px"
        }, 800);
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
        $('.header__search').animate({
            marginLeft: "10px"
        }, 800);
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

    // var dX = 0;
    // $('.collection__itemWrapper').draggable({
    //     axis: "x",
    //     scroll: false,
    //     start: function (e) { firstDrag = e.pageX },
    //     drag: function (e) {
    //         dX = Math.abs(firstDrag - e.pageX);
    //         if (dx > 50) {
    //             e.preventDefault();
    //         }
    //     },
    //     stop: function (e) {
    //         console.log(dX)
    //         if (dX > 100) {
    //             indicator;
    //         } else {
    //             e.preventDefault();
    //         }
    //     }
    // });
    var num = 0;

    function drag1() {
        var bln = true;
        var firstDrag;
        $('.new__itemWrapper').draggable({
            axis: "x",
            start: function (e) { firstDrag = e.pageX },
            stop: function (e) { if (bln) { num = 0; bln = false } indicator(e, firstDrag, $(this)) }
        });
    }
    function drag2() {
        var bln = true;
        var firstDrag;
        $('.collection__itemWrapper').draggable({
            axis: "x",
            start: function (e) { firstDrag = e.pageX },
            stop: function (e) { if (bln) { num = 0; bln = false } indicator(e, firstDrag, $(this)) }
        });
    }
    function drag3() {
        var bln = true;
        var firstDrag;
        $('.bestseller__itemWrapper').draggable({
            axis: "x",
            start: function (e) { firstDrag = e.pageX },
            stop: function (e) {
                if (bln) { num = 0; bln = false }
                indicator(e, firstDrag, $(this))
            }
        });
    }



    function indicator(e, firstDrag, $this) {

        var max = $this.find('.item').length - 2;
        var lastDrag = e.pageX;

        if (firstDrag > lastDrag) {
            if (num < max) {
                num++;

                $this.css({
                    left: -160 * num
                })
                $this.parent().next().find('span').css({
                    width: 25 * (num + 1) + "%"
                });
            }
            else {
                $this.css({
                    left: -160 * num
                })
                $this.parent().next().find('span').css({
                    width: 25 * (num + 1) + "%"
                });
            }
        }
        else {
            if (num > 0) {
                num--;
                $this.css({
                    left: -160 * num
                })
                $this.parent().next().find('span').css({
                    width: 25 * (num + 1) + "%"
                });
            }
            else {
                $this.css({
                    left: -160 * num
                })
                $this.parent().next().find('span').css({
                    width: 25 * (num + 1) + "%"
                });
            }
        }

    }

    drag1();
    drag2();
    drag3();

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

