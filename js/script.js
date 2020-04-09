
$(function () {

    $('.aside__search button').click(search);
    function search() {
        $('.aside_search input').animate({
            opacity: "1",
            width: ""
        })
    }

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

    $(window).scroll(function () {
        console.log(window.scrollY);
    });

});

