/* ===== 제이쿼리 js ===== */
"https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"




/* 상단 공연 버튼 */
$(function(){
    $(".s-1 .show-list li").click(function(){
        $(".s-1 .show-list li").removeClass('active'); 
        $(this).addClass('active');                   
    });


    /* 더보기 버튼 */
    /* toggle은 block처리가 됨 >> inline-block으로 처리를 해줘야함 */
    $('.more').click(function() {
        $(this).prev('.hidden').toggleClass('show');
        $(this).find('i').toggleClass('rotate');
    });


    /* 예정, 지난 공연 숨기기 */
    $(".s-1 li").eq(0).click(function(){
        $('#s-1-1').show();
        $('#s-1-2, #s-1-3').hide();
        $('.hidden').removeClass('show'); $('.more i').removeClass('rotate');
    });

    /* 현재,  지난 공연 숨기기 */
    $(".s-1 li").eq(1).click(function(){
        $('#s-1-2').show();
        $('#s-1-1, #s-1-3').hide();
        $('.hidden').removeClass('show'); $('.more i').removeClass('rotate');
    });

    /* 현재, 예정 공연 숨기기 */
    $(".s-1 li").eq(2).click(function(){
        $('#s-1-3').show();
        $('#s-1-1, #s-1-2').hide();
        $('.hidden').removeClass('show'); $('.more i').removeClass('rotate');
    });


});






