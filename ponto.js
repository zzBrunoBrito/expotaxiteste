$(document).ready(function(){
    var ponto =
    {"latitude" : "40", "longitude" : "96"};
    console.log(JSON.stringify(ponto));

    $.ajax({
        type: "POST",
        url: "https://expotaxi.herokuapp.com/ponto/add",
        data: JSON.stringify(ponto),
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
