Mercadopago.setPublishableKey('TEST-d7c44045-5d1b-455e-984f-2cd689d934a5');

// Escucha al evento de click en "Finalizar compra" con variables segun doc MP
document.getElementById('checkout').addEventListener('click', function() {

    var productoEnCarrito = obtenerProductosDeCarrito();

    var items = [];
    productoEnCarrito.forEach(function(producto){
        var item = {
            title: producto.nombre,
            quantity: 1,
            currency_id: 'ARS',
            unit_price: parseFloat(producto.precio)
        };
        items.push(item);
    });

    var preferenceData = {
        items: items
    }

  MercadoPago.createPreference(preferenceData, function(response) {
    // Redirige al usuario a una nueva ventana
    window.location.href = response.init_point;
  });
});

function obtenerProductosDeCarrito() {
    // Obtener los datos del carrito desde la sesión local
    var productoEnCarrito = JSON.parse(localStorage.getItem('productoEnCarrito'));

    // Crea un array para almecenar los productos
    var productosCarrito = [];

    // Iterar sobre los productos en el carrito para mostrarlos con cada propiedad
    productoEnCarrito.forEach(function(producto) {
      var productoCarrito = {
        nombre: producto.titulo,
        cantidad: 1,
        precio: producto.precio.replace('$', '')
      };

      productosCarrito.push(productoCarrito);
    });
    return productosCarrito;
}