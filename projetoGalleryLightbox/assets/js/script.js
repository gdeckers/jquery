$(function(){

    $('a.gallery').bind('click', function(){
        var img = $(this).find('img').attr('src');
        $('.framebox img').attr('src',img);
        $('.bgbox, .framebox').fadeIn('fast');
    });

    $('.bgbox, .framebox button').bind('click', function(){
        $('.bgbox, .framebox').fadeOut('fast');
    });





    $('#pwd').bind('keyup', function(){

        var txt = $(this).val();
        var forca = 0;

        if(txt.length > 6){
            forca += 25;
        }

        var reg = new RegExp(/[a-z]/i);
        if(reg.test(txt)){
            forca += 25;
        }
        var reg = new RegExp(/[0-9]/i);
        if(reg.test(txt)){
            forca += 25;
        }
        var reg = new RegExp(/[ˆa-z0-9]/i);
        if(reg.test(txt)){
            forca += 25;
        }

        $('#forca').html('Força: '+forca);

    });



    $('.icon').hover(function(){
        $(this).animate({
            "width":100,
            "height":100,
            "margin-top":-30,
            
        }, 200);
    },function(){
        $(this).animate({
            "width":70,
            "height":70,
            "margin-top":0

        }, 200);
    });


});