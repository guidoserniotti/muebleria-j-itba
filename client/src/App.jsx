import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Inicio from './pages/Inicio';
import Catalogo from './pages/Catalogo';
import ProductoDetalle from './pages/ProductoDetalle';
import Contacto from './pages/Contacto';
import CrearProducto from './pages/CrearProducto';
import EditarProducto from './pages/EditarProducto';
import NotFound from './pages/NotFound';

function App() {
  const [carrito, setCarrito] = useState([]);

  // Santi usalo desde el detalle; 
  const agregarAlCarrito = (producto) => {
    setCarrito((carritoActual) => [...carritoActual, producto]);
  };

  return (
    <div className="App">
      <Navbar cartCount={carrito.length} />
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/productos" element={<Catalogo />} />
          <Route
             path="/productos/:id"
             element={<ProductoDetalle onAgregarAlCarrito={agregarAlCarrito} />}
          />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/admin/crear-producto" element={<CrearProducto />} />
          <Route path="/admin/editar-producto/:id" element={<EditarProducto />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;