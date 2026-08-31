function obtenerIdProductoDesdeURL() {
  const parametros = new URLSearchParams(window.location.search);
  return parametros.get("id");
}

const idProducto = obtenerIdProductoDesdeURL();
