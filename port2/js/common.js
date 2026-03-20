/* ===== 제이쿼리 js ===== */
"https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"



/* 제이쿼리 */
$(function(){
    /* 공통- 헤더: 헤더 높이 변경*/
    $(window).scroll(function() {

    if ($(this).scrollTop() > 100) {
        $("#mainNav").addClass("navbar-shrink");
        
        } else {
        $("#mainNav").removeClass("navbar-shrink");
        }
    }); 


    /* 공통 - 플로팅 버튼 */
    $(window).scroll(function() { 
                    if ($(this).scrollTop() > 800) { 
                            $('.top').fadeIn(); } 
                    else { 
                            $('.top').fadeOut();
                            }
                    }); 

    /* 공통 - 모바일 메뉴창 */
    $('#hamberger-bt').click(function(){
        $("#mobile-menu").addClass("open");
    });

    $('.icon-close, #mobile-menu .flex-box>p').click(function(){
        $("#mobile-menu").removeClass("open");
    });

    $('#lang').click(function(){
        $(this).text($(this).text() === "KOR" ? "ENG" : "KOR");
    });


});