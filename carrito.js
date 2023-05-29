// Carga los datos almacenados en formato json en la sesion local desde la pagina de productos
var productoEnCarrito = JSON.parse(localStorage.getItem('productoEnCarrito'));

var contenedorCarrito = document.getElementById('lista-carrito');

var total = 0;

// Itera sobre cada parte del producto agregado para ponerla en display
productoEnCarrito.forEach(function(producto) {
    var contenedorProducto = document.createElement('div');
    contenedorProducto.classList.add('lista-carrito');

    //Convierte el elemento precio en un float
    var precioNumerico = parseFloat(producto.precio.replace('$', ''));
    total += precioNumerico;

    var precioFormateado = producto.precio.replace('$', '');
    var precioElemento = document.createElement('span');
    precioElemento.textContent = precioFormateado;

    var imagen = document.createElement('img');
    imagen.src = producto.imagen;

    var titulo = document.createElement('h3');
    titulo.textContent = producto.titulo;

    var descripcion = document.createElement('p');
    descripcion.textContent = producto.descripcion;

    contenedorProducto.appendChild(imagen);
    contenedorProducto.appendChild(titulo);
    contenedorProducto.appendChild(precioElemento);

    // Pone en display los productos agregados, en forma de lista
    contenedorCarrito.appendChild(contenedorProducto);
});

// Muestra el valor total el elemento asignado con el id 'total
var totalElemento = document.getElementById('total');
totalElemento.textContent = 'Total: $' + total.toFixed(2);

// Asignar funcion al boton Borrar todo
var botonBorrar = document.getElementById('borrar');

// Ejecutar funcion al darle click
botonBorrar.addEventListener('click', vaciarCarrito);

// Funcion a ejecutar tras el click
function vaciarCarrito() {
    localStorage.removeItem('productoEnCarrito');
    contenedorCarrito.innerHTML = '';
}