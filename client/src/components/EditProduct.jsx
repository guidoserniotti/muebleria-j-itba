import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { API_URL } from '../config.js';
import ProductForm from './ProductForm.jsx';

export default function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [producto, setProducto] = useState(null);
  const [error, setError] = useState(null);
  const [guardado, setGuardado] = useState(false);

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const response = await fetch(`${API_URL}/api/productos/${id}`);
        if (!response.ok) throw new Error('Error al cargar el producto');
        const data = await response.json();
        setProducto(data);
      } catch (err) {
        setError(err.message);
      }
    };
    
    if (id) {
      fetchProducto();
    }
  }, [id]);

  const handleUpdate = async (datosActualizados) => {
    setError(null);
    setGuardado(false);

    try {
      const response = await fetch(`${API_URL}/api/productos/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(datosActualizados),
      });

      if (response.ok) {
        setGuardado(true);
        setTimeout(() => navigate(`/productos/${id}`), 1200);
      } else {
        const cuerpo = await response.json().catch(() => ({}));
        setError(
          cuerpo.errores?.join(', ') ||
          cuerpo.error ||
          'No se pudo actualizar el producto',
        );
      }
    } catch {
      setError('No se pudo conectar con el servidor');
    }
  };

  if (error && !producto) return <p role="alert">{error}</p>;
  if (!producto) return <p>Cargando datos del producto...</p>;

  return (
    <div className="product-form-page">
      <h2>Editar Producto</h2>
      {guardado && (
        <p className="exito" role="status">
          Producto actualizado correctamente. Redirigiendo...
        </p>
      )}
      {error && <p className="error" role="alert">{error}</p>}
      <ProductForm
        initialData={producto}
        onSubmit={handleUpdate}
        textoBoton="Actualizar producto"
      />
      <button className="product-form-page__cancel" onClick={() => navigate('/productos')}>
        Cancelar y volver
      </button>
    </div>
  );
}