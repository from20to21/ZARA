$(function () {

    $('header').load("header.html"); // insert "header"
    $('nav').load("nav.html"); // insert "nav"

    setTimeout(function () {
        $('.sign__check button').click(check); // "remeber" check

        function check() {
            $(this).toggleClass("checked");
            $(this).find('img').toggleClass("checked");
        }
    });
});
