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
    var lastDrag, firstDrag;
    $(window).on('mousemove', function (e) {
        lastDrag = e.pageX;
    })
    function drag() {//drag item line
        $('.visual__wrapper').draggable({
            axis: "x", //let drag item only side to side
            revert: function () {
                return revert2();
            },
            start: function (e) {
                firstDrag = e.pageX;
                lastLeft = parseInt($('.visual__wrapper').css("left"));
            },// remember where drag start (for checking where to move)
            stop: function (e) { lastDrag = e.pageX; }
        });
    }
    drag();
    function revert2() {
        var dragAmount = Math.abs(lastDrag - firstDrag);
        if (dragAmount > $(window).width() / 2.5) {
            indicator(firstDrag, $('.visual__wrapper'), lastLeft);
            return false;
        }
        else {
            return true;
        }
    }
    function indicator(firstDrag, $this, lastLeft) { // to move item line as much as item size
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
            }
            // currentIdx--;
            // }
        }
    }



});
