$(function () {
    var st = 360;
    $('#nav_all>li').mouseenter(function () {
        $(this).find('ul').stop(false, true).slideDown(st);
    }).mouseleave(function () {
        $(this).find('ul').stop(false, true).slideUp(st);
    });
});