import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductForm from '../components/ProductForm.jsx';
import { API_URL } from '../config.js';

function CrearProducto() {
  const navigate = useNavigate();
  const [errores, setErrores] = useState([]);
  const [exito, setExito] = useState(false);

  const crearProducto = async (datos) => {
    setErrores([]);
    try {
      const res = await fetch(`${API_URL}/api/productos`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(datos),
      });

      if (!res.ok) {
        const cuerpo = await res.json().catch(() => ({}));
        setErrores(cuerpo.errores || [cuerpo.error || 'No se pudo crear el producto']);
        return;
      }

      setExito(true);
      setTimeout(() => navigate('/productos'), 1200);
    } catch {
      setErrores(['No se pudo conectar con el servidor']);
    }
  };

  return (
    <main className="product-form-page">
      <h1>Crear producto</h1>

      {exito && <p className="exito" role="status">Producto creado con éxito. Redirigiendo...</p>}

      {errores.length > 0 && (
        <ul className="error" role="alert">
          {errores.map((msg) => (
            <li key={msg}>{msg}</li>
          ))}
        </ul>
      )}

      <ProductForm onSubmit={crearProducto} textoBoton="Crear producto" />
    </main>
  );
}

export default CrearProducto;
