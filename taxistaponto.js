$(document).ready(function(){
    var carro =
    {"descricao" : "carro mt legal", "placa" : "12938713"};

    var taxista =
    {"nome" : "12:58", "sexo" : "trans", "login" : "loginmeu", "senha" : "minhasenhsa", carro : carro};;

    var ponto =
    {"latitude" : "40", "longitude" : "96"};




    var taxistaPonto =
    {taxista : taxista.id, ponto : ponto.id};










    console.log(JSON.stringify(taxistaPonto));

    $.ajax({
        type: "POST",
        url: "https://expotaxi.herokuapp.com/taxistaponto/add",
        data: JSON.stringify(taxistaPonto),
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
