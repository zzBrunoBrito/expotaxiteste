$(document).ready(function(){
    userLoc = new google.maps.LatLng({lat: -7.239155, lng: -39.414074});
    pontoLoc = new google.maps.LatLng({lat: -7.234515, lng: -39.408174});

    for (var i=0; i<pontos.length; i++){
        console.log(google.maps.geometry.spherical.computeDistanceBetween(userLoc, pontos[i]));
    }

});