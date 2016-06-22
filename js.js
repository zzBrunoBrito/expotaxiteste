$(document).ready(function(){
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "http://expotaxi.herokuapp.com/empresa/list",
        success: function(data){
            console.log(data[1]);
        }
    });
});