$(document).ready(function(){
    var endereco =
    {"bairro" : "bairro 11:19", "rua": "oai", "estado" : "oia", "cidade" : "oia", "numero" : "oia"};

    var usuario =
    {"nome" : "11:19", idade : 15, "sexo": "masc", "login" : "meulogin", "senha" : "mypass", endereco : endereco};


    $.ajax({
        type: "POST",
        url: "https://expotaxi.herokuapp.com/usuario/add",
        data: JSON.stringify(usuario),
        contentType: "application/json",
        dataType: "json",
        success: function(data){
            alert("sucesso");
        },
        error : function(data){
            alert("error");
        }
    });
});
