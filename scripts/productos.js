/* ===================================
   PRODUCTOS.JS
   Renderiza el catálogo completo en productos.html
   y filtra en tiempo real con el buscador.
   Script clásico (sin type="module") para evitar
   bloqueos de CORS al abrir el HTML directo.
   =================================== */

let listaProductosGlobal = [];

/**
 * Pide el catálogo y lo renderiza. Maneja los estados
 * de catálogo vacío y de error.
 */
async function renderizarCatalogo() {
  const contenedor = document.getElementById("catalogo-container");
  if (!contenedor) {
    console.error("No existe #catalogo-container");
    return;
  }

  try {
    listaProductosGlobal = await obtenerCatalogo();

    if (listaProductosGlobal.length === 0) {
      contenedor.innerHTML =
        '<p class="sin-resultados">No hay productos disponibles por el momento.</p>';
      return;
    }

    mostrarTarjetas(listaProductosGlobal);
  } catch (error) {
    console.error("Error al cargar el catálogo:", error);
    contenedor.innerHTML =
      '<p class="sin-resultados">Ocurrió un error al cargar los productos.</p>';
  }
}

/**
 * Pinta un listado de productos como tarjetas.
 * Mismo marcado que destacados.js para reutilizar estilos.
 * @param {Array<Object>} productos - productos a mostrar.
 */
function mostrarTarjetas(productos) {
  const contenedor = document.getElementById("catalogo-container");
  if (!contenedor) return;

  contenedor.innerHTML = "";

  if (productos.length === 0) {
    contenedor.innerHTML =
      '<p class="sin-resultados">No se encontraron productos que coincidan con tu búsqueda.</p>';
    return;
  }

  productos.forEach((producto) => {
    const tarjeta = document.createElement("article");
    tarjeta.classList.add("tarjeta-producto");

    tarjeta.innerHTML = `
      <a href="producto.html?id=${producto.id}">
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <div class="tarjeta-info">
          <h3>${producto.nombre}</h3>
          <p class="precio">$${producto.precio.toLocaleString("es-AR")}</p>
        </div>
      </a>
    `;

    contenedor.appendChild(tarjeta);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderizarCatalogo();

  const inputBusqueda = document.getElementById("input-busqueda");
  if (!inputBusqueda) return;

  inputBusqueda.addEventListener("input", (evento) => {
    const texto = evento.target.value.toLowerCase().trim();

    const filtrados = listaProductosGlobal.filter((producto) =>
      producto.nombre.toLowerCase().includes(texto)
    );

    mostrarTarjetas(filtrados);
  });
});
