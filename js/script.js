//以下為jQuery
$(document).ready(function(){
    $('.icon_heart_1').click(function(){
        $(this).css('display','none');
        $('.icon_heart_2').css('display','block');
        $('.nav_area').css('display','block');
    });

    $('.icon_heart_2').click(function(){
        $(this).css('display','none');
        $('.icon_heart_1').css('display','block');
        $('.nav_area').css('display','none');
    });
});
