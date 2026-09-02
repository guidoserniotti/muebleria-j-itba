let listaProductosGlobal = [];

async function renderizarCatalogo() {
  const contenedor = document.getElementById('catalogo-container');
  if (!contenedor) return;

  try {
    listaProductosGlobal = await obtenerCatalogo();
    
    contenedor.innerHTML = '';

    if (listaProductosGlobal.length === 0) {
      contenedor.innerHTML = '<p>No hay productos disponibles por el momento.</p>';
      return;
    }

    mostrarTarjetas(listaProductosGlobal);

  } catch (error) {
    console.error('Error al cargar el catálogo:', error);
    contenedor.innerHTML = '<p>Ocurrió un error al cargar los productos.</p>';
  }
}

function mostrarTarjetas(productos) {
  const contenedor = document.getElementById('catalogo-container');
  contenedor.innerHTML = '';

  productos.forEach(producto => {
    const tarjeta = document.createElement('article');
    tarjeta.classList.add('tarjeta-producto');

    tarjeta.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}">
      <h3>${producto.nombre}</h3>
      <p class="precio">$${producto.precio}</p>
      <a href="producto.html?id=${producto.id}" class="btn">Ver detalle</a>
    `;

    contenedor.appendChild(tarjeta);
  });
}

document.addEventListener('DOMContentLoaded', renderizarCatalogo);

const inputBusqueda = document.getElementById('input-busqueda');

if (inputBusqueda) {
  inputBusqueda.addEventListener('input', (e) => {
    const texto = e.target.value.toLowerCase().trim();

    const filtrados = listaProductosGlobal.filter(producto =>
      producto.nombre.toLowerCase().includes(texto)
    );

    mostrarTarjetas(filtrados);
  });
}