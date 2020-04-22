$(function () {

    $('.sign__check button').click(check);

    function check() {
        $(this).toggleClass("checked");
        $(this).find('img').toggleClass("checked");
    }

});
