function ProductoDetalle({ onAgregarAlCarrito }) {
  // Santi: reemplazá este producto de prueba por el que traés del fetch por _id
  const productoDePrueba = { _id: 'demo', nombre: 'Producto de prueba' };

  return (
    <section>
      <h2>Detalle del producto</h2>
      <p>Pendiente: Santi</p>
      <button onClick={() => onAgregarAlCarrito(productoDePrueba)}>
        Añadir al carrito (prueba)
      </button>
    </section>
  );
}

export default ProductoDetalle;