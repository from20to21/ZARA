$(function () {
    $('header').load("header.html");
    $('nav').load("nav.html");

    setTimeout(function () {

        $('.visual__img__previous').css({
            backgroundImage: "url(../img/detail/detail001.jpg)"
        });
        $('.visual__img__main').css({
            backgroundImage: "url(../img/detail/detail002.jpg)"
        });
        $('.visual__img__next').css({
            backgroundImage: "url(../img/detail/detail003.jpg)"
        });
        // var idx = $('.visual__image').length;
        var currentIdx = 1;
        var lastLeft = 0;
        var presentLeft = parseInt($('.visual__wrapper').css("left"));
        var moveLeft, moveRight;
        var nextSrc, presentSrc, previousSrc;
        var lastDrag, firstDrag;
        var firstDragVert, lastDragVert;

        $(window).on('mousemove', function (e) {
            lastDrag = e.pageX;
        })
        function drag() {//drag item line
            $('.visual__wrapper').draggable({
                axis: "x", //let drag item only side to side
                revert: function () {
                    return reverse();
                },
                start: function (e) {
                    firstDrag = e.pageX;
                    lastLeft = parseInt($('.visual__wrapper').css("left"));
                },// remember where drag start (for checking where to move)
                stop: function (e) { lastDrag = e.pageX; }
            });
        }
        drag();
        function reverse() {
            var dragAmount = Math.abs(lastDrag - firstDrag);
            if (dragAmount > $(window).width() / 2.5) {
                dragMove(firstDrag, $('.visual__wrapper'), lastLeft);
                return false;
            }
            else {
                return true;
            }
        }
        function dragMove(firstDrag, $this, lastLeft) { // to move item line as much as item size
            //remember where drag end (for checking where to move)
            moveLeft = lastLeft + presentLeft;
            moveRight = lastLeft - presentLeft;
            $this.css({
                transform: "translateX(" + 0 + "px)"
            });
            if (firstDrag > lastDrag) { //if you move to left
                // if (currentIdx == idx) {
                //     $this.animate({
                //         left: lastLeft
                //     }, 300);
                // }
                // else {

                $this.animate({
                    left: moveLeft
                }, 200, origin);
                function origin() {
                    presentSrc = $('.visual__img__main').css("background-image");
                    nextSrc = $('.visual__img__next').css("background-image");
                    previousSrc = $('.visual__img__previous').css("background-image");
                    $('.visual__img__previous').css({
                        "backgroundImage": presentSrc
                    });
                    $('.visual__img__main').css({
                        "backgroundImage": nextSrc
                    });
                    $('.visual__img__next').css({
                        "backgroundImage": previousSrc
                    });
                    $this.css({
                        left: presentLeft
                    });
                    if (currentIdx == 1) {
                        $('.visual__indicator span').removeClass('select');
                        $('.visual__indicator__002').addClass('select');
                    }
                    if (currentIdx == 2) {
                        $('.visual__indicator span').removeClass('select');
                        $('.visual__indicator__003').addClass('select');
                    }
                    if (currentIdx == 3) {
                        $('.visual__indicator span').removeClass('select');
                        $('.visual__indicator__001').addClass('select');
                        currentIdx = 0;
                    }
                    currentIdx++;
                }
            }
            else { // if you move right
                // if (currentIdx == 3) {
                //     currentIdx--;
                // }
                // if (currentIdx == 1) {
                //     $this.animate({
                //         left: lastLeft
                //     }, 300);
                // }
                // else {
                $this.animate({
                    left: moveRight
                }, 200, origin);
                function origin() {
                    previousSrc = $('.visual__img__previous').css("background-image");
                    presentSrc = $('.visual__img__main').css("background-image");
                    nextSrc = $('.visual__img__next').css("background-image");
                    $('.visual__img__previous').css({
                        "backgroundImage": nextSrc
                    });
                    $('.visual__img__main').css({
                        "backgroundImage": previousSrc
                    });
                    $('.visual__img__next').css({
                        "backgroundImage": presentSrc
                    });
                    $this.css({
                        left: presentLeft
                    });
                    if (currentIdx == 3) {
                        $('.visual__indicator span').removeClass('select');
                        $('.visual__indicator__002').addClass('select');
                    }
                    if (currentIdx == 2) {
                        $('.visual__indicator span').removeClass('select');
                        $('.visual__indicator__001').addClass('select');
                    }
                    if (currentIdx == 1) {
                        $('.visual__indicator span').removeClass('select');
                        $('.visual__indicator__003').addClass('select');
                        currentIdx = 4;
                    }
                    currentIdx--;
                }
            }
        }


        // function drag2() {//drag item line
        //     $('.main__wrapper').draggable({
        //         axis: "y", //let drag item only side to side
        //         revert: function () {
        //             return reverse2();
        //         },
        //         start: function (e) {
        //             firstDragVert = e.pageY;
        //             lastTop = parseInt($('.main__wrapper').css("top"));
        //         },// remember where drag start (for checking where to move)
        //         stop: function (e) { lastDragVert = e.pageY; }
        //     });
        // }
        // drag2();
        // function reverse2() {
        //     var dragAmount = Math.abs(lastDragVert - firstDragVert);
        //     if (dragAmount > $(window).height() / 2.5) {
        //         // dragMove(firstDragVert, $('.main__wrapper'), lastTop);
        //         return false;
        //     }
        //     else {
        //         return true;
        //     }
        // }
        $('.header__search').click(search);

        $('.search__close').click(close);

        $('.search__gender button').click(open);
        $('.search__category button').click(open);

        $('.search__gender p').click(cat_change);
        $('.search__category p').click(cat_change);

        function cat_change() { //for gender/category change in search menus
            bln = true;
            var target = $(this).text();
            $(this).parent().find('button').html(target + '<img src="../img/download.png" alt="">');
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
    }, 500);
});
