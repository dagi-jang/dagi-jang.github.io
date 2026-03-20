
/* 메뉴 버튼 */
$(function(){
    $('#bt').click(function(){
        $('header nav ul').stop().slideToggle();
    });

/* ========== 메인 ========== */
/* 섹션2 */
    $(".sub-menu li").eq(0).click(function(){
        $(this).addClass("active");
        $(this).siblings("li").removeClass("active");
        $('#a, #sub-text-1').show();
        $('#b, #c, #sub-text-2, #sub-text-3').hide();
    });
    $(".sub-menu li").eq(1).click(function(){
        $(this).addClass("active");
        $(this).siblings("li").removeClass("active");
        $('#b, #sub-text-2').show();
        $('#a, #c, #sub-text-1, #sub-text-3').hide();
    });
    $(".sub-menu li").eq(2).click(function(){
        $(this).addClass("active");
        $(this).siblings("li").removeClass("active");
        $('#c, #sub-text-3').show();
        $('#a, #b, #sub-text-1, #sub-text-2').hide();
    });

/* 고정창 */
    $(window).scroll(function() { 
                    if ($(this).scrollTop() > 900) {
                            $('.fix-2').show(); }
                    else { 
                            $('.fix-2').hide();
                            }
                    }); 
});