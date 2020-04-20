$(function () {

    $('.visual__img01').css({
        backgroundImage: "url(../img/detail/detail002.jpg)"
    });
    $('.visual__img02').css({
        backgroundImage: "url(../img/detail/detail001.jpg)"
    });
    $('.visual__img03').css({
        backgroundImage: "url(../img/detail/detail003.jpg)"
    });
    var idx = $('.visual__image').length;
    var currentIdx = parseInt(idx / 2) + 1;
    var lastLeft = 0;
    var presentLeft = parseInt($('.visual__wrapper').css("left"));
    console.log(presentLeft);
    function drag() {//drag item line
        var firstDrag;
        $('.visual__wrapper').draggable({
            axis: "x", //let drag item only side to side
            start: function (e) {
                firstDrag = e.pageX;
                lastLeft = parseInt($('.visual__wrapper').css("left"));
            },// remember where drag start (for checking where to move)
            stop: function (e) { indicator(e, firstDrag, $(this), lastLeft) }
        });
    }
    drag();

    function indicator(e, firstDrag, $this, lastLeft) { // to move item line as much as item size
        var lastDrag = e.pageX; //remember where drag end (for checking where to move)
        var moveLeft = lastLeft + presentLeft;
        var moveRight = lastLeft - presentLeft;
        var currentDiv = '.visual__img0' + currentIdx;
        console.log($this.find(currentDiv).css("background-image"));
        if (firstDrag > lastDrag) { //if you move to left
            if (currentIdx == idx) {
                $this.animate({
                    left: lastLeft
                }, 300);
            }
            else {
                $this.animate({
                    left: moveLeft
                }, 300);
                currentIdx++;
            }
        }
        else { // if you move right
            if (currentIdx == 1) {
                $this.animate({
                    left: lastLeft
                }, 300);
            }
            else {
                $this.animate({
                    left: moveRight
                }, 300);
                currentIdx--;
            }
        }
        var currentDiv2 = '.visual__img0' + currentIdx;
        console.log($this.find(currentDiv2).css("background-image"));
    }

});
