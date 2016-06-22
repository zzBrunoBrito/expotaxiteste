$(document).ready(function(){
    var carro =
    {"descricao" : "carro mt legal", "placa" : "12938713"};

    var taxista =
    {"nome" : "taxista 2", "sexo" : "trans", "login" : "loginmeu", "senha" : "minhasenhsa", carro : carro};


    $.ajax({
        type: "POST",
        url: "https://expotaxi.herokuapp.com/taxista/add",
        data: JSON.stringify(taxista),
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
