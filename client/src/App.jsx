import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';
import ProductDetail from './components/ProductDetail';
import ContactForm from './components/ContactForm';

const productos = [
  {
    id: 1,
    nombre: 'Sofá Patagonia',
    precio: 1250000,
    imagen: '/img/products/sofa-patagonia.png',
    descripcion:
      'Sofá de tres cuerpos tapizado en lino, cómodo y sostenible para el hogar moderno.',
  },
];

function App() {
  const [vista, setVista] = useState('listado');
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [carrito, setCarrito] = useState([]);

  const verDetalle = (producto) => {
    setProductoSeleccionado(producto);
    setVista('detalle');
  };

  const volverAlListado = () => {
    setProductoSeleccionado(null);
    setVista('listado');
  };

  const agregarAlCarrito = (producto) => {
    setCarrito((carritoActual) => [...carritoActual, producto]);
  };

  return (
    <div className="App">
      <Navbar cartCount={carrito.length} />
      <main>
        {vista === 'listado' && (
          <section>
            <h1>Catálogo de productos</h1>
            <div className="product-list">
              {productos.map((producto) => (
                <ProductCard
                  key={producto.id}
                  producto={producto}
                  onClick={() => verDetalle(producto)}
                />
              ))}
            </div>
          </section>
        )}

        {vista === 'detalle' && (
          <ProductDetail
            producto={productoSeleccionado}
            onVolver={volverAlListado}
            onAgregarAlCarrito={agregarAlCarrito}
          />
        )}

        {vista === 'contacto' && <ContactForm />}
      </main>
      <Footer />
    </div>
  );
}

export default App;