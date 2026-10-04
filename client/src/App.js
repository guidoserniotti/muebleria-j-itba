import { useState } from 'react';
import './App.css';

function Navbar({ cantidadCarrito, setVista }) {
  return (
    <nav>
      <button type="button" onClick={() => setVista('listado')}>Inicio</button>
      <button type="button" onClick={() => setVista('contacto')}>Contacto</button>
      <span>Carrito: {cantidadCarrito}</span>
    </nav>
  );
}

function ProductList({ verDetalle }) {
  return (
    <section>
      <h1>Catálogo de Productos</h1>
      <button
        type="button"
        onClick={() => verDetalle({ id: 1, nombre: 'Silla de Madera', precio: 15000 })}
      >
        Ver detalle de Silla de Madera
      </button>
    </section>
  );
}

function ProductDetail({ producto, volver, agregarAlCarrito }) {
  return (
    <section>
      <h1>{producto.nombre}</h1>
      <p>Precio: ${producto.precio}</p>
      <button type="button" onClick={() => agregarAlCarrito(producto)}>
        Añadir al carrito
      </button>
      <button type="button" onClick={volver}>
        Volver
      </button>
    </section>
  );
}

function ContactForm() {
  return (
    <section>
      <h1>Formulario de Contacto</h1>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      Mueblería Hermanos Jota - 2026
    </footer>
  );
}

function App() {
  const [vista, setVista] = useState('listado');
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  const verDetalle = (producto) => {
    setProductoSeleccionado(producto);
    setVista('detalle');
  };

  return (
    <div>
      <Navbar cantidadCarrito={carrito.length} setVista={setVista} />
      {vista === 'listado' && <ProductList verDetalle={verDetalle} />}
      {vista === 'detalle' && productoSeleccionado && (
        <ProductDetail
          producto={productoSeleccionado}
          volver={() => setVista('listado')}
          agregarAlCarrito={agregarAlCarrito}
        />
      )}
      {vista === 'contacto' && <ContactForm />}
      <Footer />
    </div>
  );
}

export default App;
