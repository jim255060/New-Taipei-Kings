$(document).ready(function () {

    // 手機選單
    $('.title-menu-active').hide();
    $('.menu-list').click(function () {
        $('.title-menu-active').fadeToggle(1000);
        $(this).parent().siblings().fadeOut(1000);
    })



    //title-menu-item a 的 hover 效果
    $('.title-menu-item').hover(function () {
        $(this).find('a').toggleClass('hover-yellow');
    })

    //球員照片效果
    $('.member').hover(function () {
        $(this).find('.picture-f').toggleClass('display-none');
        $(this).find('.picture-e').toggleClass('display-none');
    });

    // goTop
    $('.goTop-btn').click(function () {
        $('html, body').animate({ scrollTop: 0 },1000);
    })

    $(window).scroll(function() {
        if($(window).scrollTop() > 50) {
            $('.goTop-btn').fadeIn(250)
        }
        else {
            $('.goTop-btn').fadeOut(250)
        }
    })
});