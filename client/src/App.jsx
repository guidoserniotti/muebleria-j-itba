import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import ContactForm from './components/ContactForm';

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
      <Navbar cartCount={carrito.length} onNavigate={setVista} />
      <main>
        {vista === 'listado' && <ProductList onVerDetalle={verDetalle} />}

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
