function openNav(){
    document.getElementById("mobile-menu").style.width = "90%";
}

function closeNav(){
    document.getElementById("mobile-menu").style.width = "0%";
}

//Para el mapa
function iniciarMap(){
  var coord = {lat:-34.5956145 ,lng: -58.4431949};
  var map = new google.maps.Map(document.getElementById('map'),{
    zoom: 10,
    center: coord
  });
  var marker = new google.maps.Marker({
    position: coord,
    map: map
  });
}