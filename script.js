function openNav(){
    document.getElementById("mobile-menu").style.width = "90%";
}

function closeNav(){
    document.getElementById("mobile-menu").style.width = "0%";
}

function enviarFormulario(){
    var nombreContacto = document.getElementById('nombre').value;
    var emailContacto = document.getElementById('email').value;
    var mensajeContacto = document.getElementById('mensaje').value;
    const DOMINIOS = ['@gmail.com', '@hotmail.com', '@yahoo.com']

    function confirmarFormulario(){
        if(confirm(`Nombre: ${nombreContacto}`)){
            if (confirm(`Email: ${emailContacto}`)){;
            confirm(`Mensaje: ${mensajeContacto}`);
            };
        };
    }

    if(nombreContacto == '' || emailContacto == '' || mensajeContacto == ''){
        alert('Por favor complete todas las casillas');

    }
    else {
        var dominioValido = false;
        for (var i = 0; i < DOMINIOS.length; i++) {
          if (emailContacto.endsWith(DOMINIOS[i])) {
            dominioValido = true;
            break;
          }
        }
        if (dominioValido) {
          confirmarFormulario();
        }
        else {
          alert('Por favor incluya un email con uno de los siguientes dominios: ' + DOMINIOS.join(', '));
        }
    }
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