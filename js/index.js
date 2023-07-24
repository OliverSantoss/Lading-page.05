$(function () {
    var mobile = $('.mobile').find('i');
    mobile.click(function () {
        $('.mobile').find('ul').slideToggle();
    });
});