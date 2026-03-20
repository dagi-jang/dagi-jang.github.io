/* ===== 제이쿼리 js ===== */
"https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"


/* 제이쿼리 */
$(function(){
    /* 건물 소개 버튼 */
    $(".building .flex-box div img").click(function(){
        $(".building .flex-box div img").removeClass('active'); 
        $(this).addClass('active');            
    });

    /* 꾸러기관 숨기기 */
    $("#s-1-1-bt").click(function(){
        $('#s-1-1').show();
        $('#s-1-2').hide();
    });

    /* 본관 숨기기 */
    $("#s-1-2-bt").click(function(){
        $('#s-1-2').show();
        $('#s-1-1').hide();
    });

});