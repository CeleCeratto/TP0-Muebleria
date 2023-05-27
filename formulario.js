function enviarFormulario(){
    var nombreContacto = document.getElementById('nombre').value;
    var emailContacto = document.getElementById('email').value;
    var mensajeContacto = document.getElementById('mensaje').value;
    const DOMINIOS = ['@gmail.com', '@hotmail.com', '@yahoo.com']

    //Confirmacion del usuario de los datos de las tres casillas
    function confirmarFormulario(){
        if(confirm(`Nombre: ${nombreContacto}`)){
            if (confirm(`Email: ${emailContacto}`)){;
            confirm(`Mensaje: ${mensajeContacto}`);
            };
        };
    }

    //Requisito de TODAS las casillas
    if(nombreContacto == '' || emailContacto == '' || mensajeContacto == ''){
        alert('Por favor complete todas las casillas');

    }

    //Si el email de contacto no es uno de los incluidos en la lista, no podra completar el formulario
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