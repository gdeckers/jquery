$(function(){

    $('#obj').bind('mousedown',function(){
        $('#obj').bind('mousemove', function(e){
            var x = e.originalEvent.pageX;
            var y = e.originalEvent.pageY;

            var width = $(this).width();
            var height = $(this).height();

            $(this).css('left',(x - (width/2))+'px');
            $(this).css('top',(y - (height/2))+'px');


        });
    });

    $('#obj').bind('mouseup',function(){
        $('#obj').unbind('mousemove');
    });
    






    $('button').bind('click',function(){

        var location = $('#location').val();
        var now = new Date();

        var tempURL = 'https://query.yahooapis.com/v1/public/yql?format=json&rnd=' + now.getFullYear() + now.getMonth() + now.getDay() + now.getHours() + '&diagnostics=true&callback=?&q='
        tempURL += 'select * from weather.forecast where woeid in (select woeid from geo.places(1) where text=" '+location+'") and u="c"';

        $.ajax({
            url:encodeURI(tempURL),
            dataType: 'json',
            type:'GET',
            beforeSend:function(){
                $('#res').html('Carregando...');
            },
            success:function(data){
                if(data !== null && data.query !== null && data.query.results !== null 
                    && data.query.results.channel.description !== 'Yahoo! Weather Error'){
    
                        var temp = data.query.results.channel.item.condition.temp;
    
                        $('#res').html(temp+'° C');
                    }
            },
            error:function(){
                $('#res').html('Erro!');
            }
        });

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