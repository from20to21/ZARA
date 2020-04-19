$(function () {

    var bln = true;

    $('.header__search').click(search);

    $('.search__close').click(close);

    $('.search__gender button').click(open);
    $('.search__category button').click(open);

    $('.search__gender p').click(cat_change);
    $('.search__category p').click(cat_change);

    $('.minus').click(minus);
    $('.plus').click(plus);
    
    $('.wish__btn__cart').click(cart_select);
    $('.wish__all__cart').click(cart_all);

    function sale(){
        $('.sale').find('span').css({
            display:"inline-block",
            marginLeft: "5px",
            color: "red",
            fontSize: "0.8rem",
            fontWeight: "300",
            textDecoration: "none"
        });
    }
    sale();
    
    // var num = 0;

    // function drag() {
    //     var bln = true;
    //     var firstDrag;
    //     $('.wish01').draggable({
    //         axis: "x",
    //         start: function (e) { firstDrag = e.pageX },
    //         stop: function (e) { if (bln) { num = 0; bln = false } indicator(e, firstDrag, $(this)) }
    //     });
    // }
    // drag();
    // function indicator(e, firstDrag, $this) {

    //     var max = $this.find('.item').length - 2;
    //     var lastDrag = e.pageX;

    //     if (firstDrag > lastDrag) { //왼쪽으로 드래그
    //         if (num < max) {
    //             num++;

    //             $this.css({
    //                 left: -160 * num
    //             })
    //             $this.parent().next().find('span').css({
    //                 width: 25 * (num + 1) + "%"
    //             });
    //         }
    //         else {
    //             $this.css({
    //                 left: -160 * num
    //             })
    //             $this.parent().next().find('span').css({
    //                 width: 25 * (num + 1) + "%"
    //             });
    //         }
    //     }
    //     else { //오른쪽으로 드래그
    //         if (num > 0) {
    //             num--;
    //             $this.css({
    //                 left: -160 * num
    //             })
    //             $this.parent().next().find('span').css({
    //                 width: 25 * (num + 1) + "%"
    //             });
    //         }
    //         else {
    //             $this.css({
    //                 left: -160 * num
    //             })
    //             $this.parent().next().find('span').css({
    //                 width: 25 * (num + 1) + "%"
    //             });
    //         }
    //     }

    // }

    function cart_select(){
        $(this).parent().parent().animate({
            opacity: "0",
            marginBottom: "-120px"
        },300);
        $(this).parent().parent().remove().delay(300);
    }

    function cart_all(){
        $('.wish__btn__cart').parent().parent().animate({
            opacity: "0",
            marginBottom: "-120px"
        },300);
        $(this).animate({
            opacity: "0",
            marginBottom: "-120px"
        },300);
    }

    function minus(){
        var num = $(this).parent().find('button').text();
        if(num == 1){
            num = 1;
        }else{
            num--;
        }
        $(this).parent().find('button').text(num);
    }
    function plus(){
        var num = $(this).parent().find('button').text();
        num++;
        $(this).parent().find('button').text(num);
    }





    function cat_change() {
        bln = true;
        var target = $(this).text();
        $(this).parent().find('button').html(target + '<img src="img/download.png" alt="">');

        $(this).parent().find('p').css({
            display: "none",
            transform: "translate(-5%, -50px)"
        });
        $(this).parent().find('p').animate({
            opacity: 0
        });
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