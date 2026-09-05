/* ===================================
   CARRITO.JS
   Lógica del carrito de compras persistida en
   localStorage, y actualización del contador
   visual del header (#cart-count).
   Script clásico (sin type="module") para evitar
   bloqueos de CORS al abrir el HTML directo.
   =================================== */

const CARRITO_STORAGE_KEY = "carrito";

/**
 * Lee y parsea el carrito guardado en localStorage.
 * @returns {Array<{id: number, cantidad: number}>} el carrito, o [] si no existe o está corrupto.
 */
function obtenerCarrito() {
  const crudo = localStorage.getItem(CARRITO_STORAGE_KEY);
  if (!crudo) {
    return [];
  }
  try {
    const carrito = JSON.parse(crudo);
    return Array.isArray(carrito) ? carrito : [];
  } catch (error) {
    return [];
  }
}

/**
 * Serializa y guarda el carrito en localStorage.
 * @param {Array<{id: number, cantidad: number}>} carrito - el carrito a guardar.
 */
function guardarCarrito(carrito) {
  localStorage.setItem(CARRITO_STORAGE_KEY, JSON.stringify(carrito));
}

/**
 * Agrega un producto al carrito, sumando la cantidad si ya estaba presente.
 * @param {number|string} idProducto - id del producto a agregar.
 * @param {number} cantidad - cantidad a agregar (default 1).
 */
function agregarAlCarrito(idProducto, cantidad = 1) {
  const id = Number(idProducto);
  const cant = Math.max(1, Math.trunc(Number(cantidad)) || 1);
  const carrito = obtenerCarrito();
  const item = carrito.find((i) => i.id === id);

  if (item) {
    item.cantidad += cant;
  } else {
    carrito.push({ id, cantidad: cant });
  }

  guardarCarrito(carrito);
}

/**
 * Suma las cantidades de todos los items del carrito.
 * @returns {number} cantidad total de productos en el carrito.
 */
function obtenerCantidadTotalCarrito() {
  const carrito = obtenerCarrito();
  return carrito.reduce((total, item) => total + Number(item.cantidad || 0), 0);
}

/**
 * Lee el carrito y actualiza el contador visual en el header (#cart-count).
 * Debe llamarse recién después de que layout.js haya inyectado el header en el DOM.
 */
function actualizarContadorHeader() {
  const contador = document.getElementById("cart-count");
  if (contador) {
    contador.textContent = obtenerCantidadTotalCarrito();
  }
}
