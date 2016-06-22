$(document).ready(function(){
    var carro =
    {"descricao" : "outro carro", "placa" : "12938713"};

    var taxista =
    {"nome" : "taxista 70", "sexo" : "masc", "login" : "aaaa", "senha" : "minhasenhsa", carro : carro};

    var usuario =
    {"nome" : "11:48", idade : 15, "sexo": "masc", "login" : "meulogin", "senha" : "mypass", endereco : endereco};

    var corrida =
    {"solicitacao" : true, "resposta" : true, usuario : usuario, taxista : taxista, "latitudeUsuario" : "12", "longitudeUsuario" : 10};



    $.ajax({
        type: "POST",
        url: "https://expotaxi.herokuapp.com/corrida/add",
        data: JSON.stringify(corrida),
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
