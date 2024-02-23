//efeito de esconder formulário de cadastro

/*Para iniciar sempre utilizar o inicio do código abaixo*/
/*Melhora os efeitos e simplifica o JS.*/
$(document).ready(function(){
    /*aqui dentro entra os comando do jquery*/

    /* a instrução abaixo equivale ao
    docment.getelemntById("botão-cadastrar").click()*/

    $("#botao-cadastrar").click(function(){

        $("#form-cadastrar").slideToggle("slow");
        $("#section-login").slideToggle("slow");
        $("#botao-cadastrar").hide();
    })


});