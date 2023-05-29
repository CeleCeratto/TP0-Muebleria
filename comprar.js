// Identificar todos los botones "comprar"
var botonComprar = document.querySelectorAll('.comprar');

// Ejecutar la funcion, onclick, como eventlistener
botonComprar.forEach(function(boton) {
    boton.addEventListener('click', agregarAlCarrito);
});

// Funcion del boton comprar
function agregarAlCarrito(evento) {
    var tarjeta = evento.target.closest('.tarjeta'); // Identifica en que div se hizo click a comprar
    var imagen = tarjeta.querySelector('img').getAttribute('src'); // Carga la foto
    var titulo = tarjeta.querySelector('h3').textContent; // Carga el nombre del producto
    var descripcion = tarjeta.querySelector('p').textContent; // Carga la descripcion
    var precio = tarjeta.querySelector('span').textContent; // Carga el precio

    var item = {
        imagen: imagen,
        titulo: titulo,
        descripcion: descripcion,
        precio: precio,
    };

    // Convierte la informacion del producto en una lista
    var productoEnCarrito = JSON.parse(localStorage.getItem('productoEnCarrito')) || [];

    if (productoEnCarrito.length < 3) {
        // Agrega productos nuevos a la lista anterior
        productoEnCarrito.push(item);
        // Almacena los productos agregados al carrito, en la sesion actual, como string
        localStorage.setItem('productoEnCarrito', JSON.stringify(productoEnCarrito));
    }
    else {
        alert('Solo puede agregar 3 productos a la vez');
    }
}
