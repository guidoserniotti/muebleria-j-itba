import { useState, useEffect } from 'react';
import { API_URL } from '../config.js';
// import ProductForm from './ProductForm.jsx'; // Falta que Abby termine y suba este componente

export default function EditProduct({ productoId, setVista }) {
  const [producto, setProducto] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        // Usamos productoId que viene por prop
        const response = await fetch(`${API_URL}/api/productos/${productoId}`);
        if (!response.ok) throw new Error('Error al cargar el producto');
        const data = await response.json();
        setProducto(data); // Guarda los datos en el estado para precargarlos
      } catch (err) {
        setError(err.message);
      }
    };
    
    if (productoId) {
      fetchProducto();
    }
  }, [productoId]);

  const handleUpdate = async (datosActualizados) => {
    try {
      const response = await fetch(`${API_URL}/api/productos/${productoId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(datosActualizados),
      });

      if (response.ok) {
        alert('Producto actualizado correctamente');
        setVista('listado'); // Vuelve al catálogo cambiando el estado
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
      
      {/* Botón temporal para poder volver atrás mientras probás */}
      <button onClick={() => setVista('listado')}>Cancelar y volver</button>
    </div>
  );
}