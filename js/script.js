
$(function () {

    $('h1').animate({
        top: "40%"
    }, 2000);

    $('.header__search button').click(search_on);

    function search_on() {
        $('.header__search input').animate({
            width: "50%",
            opacity: "1"
        }, 1000);
    }

});

