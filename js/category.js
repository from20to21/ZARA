
$(function () {
    //insert html
    $('header').load("header.html"); // insert "header"
    $('nav').load("nav.html"); // insert "nav""

    setTimeout(function () {
        var bln = true;

        // search menu
        $('.header__search').click(search); // search menu open
        $('.search__close').click(close); // search menu close
        $('.search__gender button').click(open); // search-gender tab open
        $('.search__category button').click(open); // search-category tab open
        $('.search__gender p').click(cat_change); // search-gender change
        $('.search__category p').click(cat_change);  // search-category change
        function search() { //search page open
            $('html').addClass("search"); //page fixed
            $('.wrap').addClass("search"); //page fixed

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
            $('.header__cart').animate({
                opacity: 0
            }, 500);
            $('.header__cart').delay(500).css({
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
        function close() { //go back to origin page
            $('html').removeClass("search");
            $('.wrap').removeClass("search");
            $('.search__category').find('button').html('CATEGORY<img src="../img/icon/download.png" alt="">');

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
            $('.header__cart').animate({
                opacity: 1
            }, 500);
            $('.header__cart').delay(500).css({
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
        function open() { //for open gender/category tab in search menu
            if (bln) {
                bln = false; // to open it when it is not open
                $(this).parent().find('p').css({ //list open
                    display: "flex",
                    transform: "translate(-5%, 0)"
                }, 500);
                $(this).parent().find('p').animate({ //list open2
                    opacity: 1
                });
                $(this).find('img').css({ //list open3 (missing image problem) **fix need
                    transform: "rotate(180deg)"
                })
            }
            else {
                bln = true;  // to open it when it is not open
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
        function cat_change() { //for gender/category change in search menus
            bln = true;
            var target = $(this).text();
            $(this).parent().find('button').html(target + '<img src="../img/icon/download.png" alt="">');
            $(this).parent().find('p').fadeOut(500); //list close
        }
        //search menu end

        $('.header__cart button').click(cart);
        function cart(){
            location.href = "cart.html"
        }

        $('.category').click(change);
        $('.back').click(back);
        function change() { //category menu open
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
                display: "flex"
            });
            $('nav').animate({
                bottom: "-45px"
            }, 300);
            $('.change').delay(500).fadeOut();
        }
        function back() { //category menu close
            $('.change').fadeIn();
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
            $('.category__box').css({
                display: "none"
            });
            $('nav').animate({
                bottom: "0"
            }, 300);
        }

    }, 500);
});

