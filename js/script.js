
$(function () {
    $('.nav__wrapper').fadeOut();

    $('.header__burger').click(menu_fade);
    $('.nav__exit').click(menu_fade);

    function menu_fade() {
        $('.nav__wrapper').fadeToggle(800);
    }

});

