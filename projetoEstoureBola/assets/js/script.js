function addBola(){
    var x = Math.floor(Math.random() * 800);
    var y = Math.floor(Math.random() * 500);
    var color = Math.floor(Math.random() * 100000000);
    var bola = $('<div class="bola"></div>');
    bola.css('left', x + 'px');
    bola.css('top', y + 'px');
    bola.css('background-color', '#'+color);
    bola.bind('click', function(){
        $(this).fadeOut('fast');
        placar++;
        updatePlacar();
    });

    $(document.body).append(bola);
 

}

function updatePlacar(){
    
    $('#placar').html(placar);
}

var placar = 0;

$(function(){

    $('#start').bind('click', function(){
        setInterval(addBola, 1000);
    });


});