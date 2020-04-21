$(function () {

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
    // var currentIdx = parseInt(idx / 2) + 1;
    var lastLeft = 0;
    var presentLeft = parseInt($('.visual__wrapper').css("left"));
    var moveLeft, moveRight;
    var nextSrc, presentSrc, previousSrc;
    var bln = true;
    function drag() {//drag item line
        var firstDrag;
        $('.visual__wrapper').draggable({
            axis: "x", //let drag item only side to side
            start: function (e) {
                firstDrag = e.pageX;
                lastLeft = parseInt($('.visual__wrapper').css("left"));
            },// remember where drag start (for checking where to move)
            stop: function (e) { if (bln) { indicator(e, firstDrag, $(this), lastLeft) } }
        });
    }
    drag();

    function indicator(e, firstDrag, $this, lastLeft) { // to move item line as much as item size
        bln = false;
        var lastDrag = e.pageX; //remember where drag end (for checking where to move)
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
            }, 300, origin);
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
                bln = true;
            }
            //     currentIdx++;
            // }
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
            }, 300, origin);
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
                bln = true;
            }
            // currentIdx--;
            // }
        }
    }



});
