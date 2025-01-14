$(document).ready(function(){
    $('popupopen').click(function(){
        $('.popup').fadeIn(0);
    });
    $('button').click(function(){
        $('.popup').fadeOut(0);
    });
});

$(document).ready(function(){
    $('.gnb').hover(function(){
        $('.subnav').stop().slideDown('fast');
    },function(){
        $('.subnav').stop().slideUp('fast');
    });
});

$(document).ready(function(){
    setInterval(function(){
        $('.main ul').animate({
            top: '-=' + 300
        },'slow',function(){
            $('.main li').first().appendTo('.main ul');
            $('.main ul').css('top',0);
        });
    },2000);
});

$(document).ready(function(){
    $('.btn a').click(function(){
        $('.btn a').removeClass('active');
        $(this).addClass('active');

        var index = $(this).parent().index();
        $('.bwrap > div').stop().fadeOut(0);
        $('.bwrap > div').eq(index).stop().fadeIn(0);
    });
}); 