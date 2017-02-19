$(document).ready(function(){
    setTimeout(function(){
        updateH();
    },200);

});

$(window).on('resize', function(){
    setTimeout(function(){
        updateH();
    }, 200);
});

function updateH(){
    var height = window.innerHeight;
    var headerMenu = $('.navbar-default').height();
    var footerH = $('.footer').height();

    var differ = (height - (headerMenu + footerH)-20);

    $('.content').css('height', differ+'px');
}