$(function () {
    $('.sign__email input').click(typing);
    $('.sign__password input').click(typing);

    function typing() {
        $(this).parent().find('p').animate({
            top: "-10px",
            fontSize: "0.7rem"
        }, 300);
    }

});
