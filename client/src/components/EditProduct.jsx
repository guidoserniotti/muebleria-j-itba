import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { API_URL } from '../config.js';
// import ProductForm from './ProductForm.jsx'; // Falta que Abby termine y suba este componente

export default function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [producto, setProducto] = useState(null);
  const [error, setError] = useState(null);

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
    try {
      const response = await fetch(`${API_URL}/api/productos/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(datosActualizados),
      });

      if (response.ok) {
        alert('Producto actualizado correctamente');
        navigate('/productos');
      } else {
        alert('Hubo un problema al actualizar el producto');
      }
    } catch (error) {
      console.error('Error de conexión:', error);
      alert('Error de conexión con el servidor');
    }
  };

  if (error) return <p>{error}</p>;
  if (!producto) return <p>Cargando datos del producto...</p>;

  return (
    <div className="edit-product-container">
      <h2>Editar Producto</h2>
      {/* <ProductForm initialData={producto} onSubmit={handleUpdate} /> */}
      <p>Esperando el formulario de Abby para inyectar los datos...</p>
      
      <button onClick={() => navigate('/productos')}>Cancelar y volver</button>
    </div>
  );
}