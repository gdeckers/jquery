$(function(){
    /*$('button').bind('click', function(){
        var altura = $('#altura').val();
        var peso = $('#peso').val();

        altura = altura.replace(',', '.');
        peso = peso.replace(',','.');

        var imc = peso / (altura*altura);

        if(imc < 16){
            var result = "Baixo peso muito grave";
        } else if(imc >=16 && imc < 16.99){
            var result = "Baixo peso grave";
        } else if(imc >=17 && imc < 18.49){
            var result = "Baixo peso";
        } else if(imc >=18.5 && imc < 24.99){
            var result = "Peso normal";
        } else if(imc >=25 && imc < 29.99){
            var result = "Sobrepeso";
        } else if(imc >=30 && imc < 34.99){
            var result = "Obesidade grau I";
        } else if(imc >=35 && imc < 39.99){
            var result = "Obesidade grau II";
        } else if(imc >=40 ){
            var result = "Obesidade grau III";
        }


        $('#resultado').html("Seu IMC é: "+imc+"kg/m² e seu status é: "+result);
       // $('#resultado').css('background-color', 'blue')
    });
    */

/* Menu DropDown com JQuery
    $('li').hover(function(){
        $(this).find('.menu2').slideDown();
    }, function(){
        $(this).find('.menu2').slideUp();
    });
*/

var horaEscolhaCampo;

$('input').bind('focus',function(){
    var pos = $(this).offset();
    var width = $(this).width();

    $('.horaescolha').css('left',pos.left+width);
    $('.horaescolha').css('top', pos.top);
    $('.horaescolha').show();

    horaEscolhaCampo = $(this);
});

$('input').bind('blur',function(){
    setTimeout(function(){$('.horaescolha').hide();},200);
    
});

$('.horaescolha button').bind('click', function(){
    var hora = $(this).html();
    horaEscolhaCampo.val(hora);
});


});