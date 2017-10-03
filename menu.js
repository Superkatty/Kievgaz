$('.ui.dropdown').dropdown();
$(document).ready(function () {
    $('.right.menu.open').on("click", function (e) {
        e.preventDefault();
        $('.ui.vertical.menu').toggle();
    });
});
$('.ui.accordion').accordion();