$(document).ready(function(){
    var carro =
    {"descricao" : "carro mt legal", "placa" : "12938713"};

    var taxista =
    {"nome" : "12:58", "sexo" : "trans", "login" : "loginmeu", "senha" : "minhasenhsa", carro : carro};;

    var endereco =
    {"bairro" : "bairro 11:19", "rua": "oai", "estado" : "oia", "cidade" : "oia", "numero" : "oia"};

    var usuario =
    {"nome" : "11:19", idade : 15, "sexo": "masc", "login" : "meulogin", "senha" : "mypass", endereco : endereco};

    var corrida =
    {usuario : usuario.id, taxista : taxista, "latitudeUsuario" : "12", "longitudeUsuario" : "10"};

    console.log(JSON.stringify(corrida));

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
