$(document).ready(function(){
    $('.popupopen').click(function(){
        $('.popup').fadeIn(0);
    });

    $('.popup a').click(function(){
        $('.popup').fadeOut(0);
    });
});

$(document).ready(function(){
    $('.mainnav').hover(function(){
        $(this).find('+ .subnav').stop().slideDown('fast');
        $(this).parent().mouseleave(function(){
            $(this).find('.subnav').stop().slideUp('fast');
        });
    });
});