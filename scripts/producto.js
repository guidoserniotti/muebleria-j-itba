function obtenerIdProductoDesdeURL() {
  const parametros = new URLSearchParams(window.location.search);
  return parametros.get("id");
}

const idProducto = obtenerIdProductoDesdeURL();

async function renderizarProducto() {
  if (!idProducto) {
    mostrarErrorProductoNoEncontrado("No se especificó un ID de producto");
    return;
  }

  try {
    const producto = await obtenerProductoPorId(idProducto);

    if (!producto) {
      mostrarErrorProductoNoEncontrado("El producto no existe");
      return;
    }

    //Volcar los datos en el DOM
    document.getElementById("producto-nombre").textContent = producto.nombre;
    document.getElementById("producto-descripcion").textContent =
      producto.descripcion;
    document.getElementById("producto-precio").textContent =
      `$${producto.precio}`;
    document.getElementById("producto-imagen").src = producto.imagen;
    document.getElementById("producto-imagen").alt = producto.nombre;

    //Actualizar el título de la página
    document.title = `${producto.nombre} | Mueblería Hermanos Jota`;

    //Agregar evento al botón de añadir al carrito
    document
      .getElementById("btn-anadir-carrito")
      .addEventListener("click", () => {
        const cantidad = document.getElementById("producto-cantidad").value;
        agregarAlCarrito(idProducto, cantidad);
        actualizarContadorHeader();
      });
  } catch (error) {
    console.error("Error al cargar el producto:", error);
    mostrarErrorProductoNoEncontrado("Error al cargar el producto");
  }
}

//Función para manejar caso de id inexistente
function mostrarErrorProductoNoEncontrado(mensaje) {
  const contenedorProducto = document.getElementById("producto-detalle");
  contenedorProducto.innerHTML = `
    <div class="producto-error">
      <h1>Producto no encontrado</h1>
      <p>${mensaje}</p>
      <a href="productos.html" class="btn">Volver al catálogo</a>
    </div>
  `;
}

//Ejecutar cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", renderizarProducto);
