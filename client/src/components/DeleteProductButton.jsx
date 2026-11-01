import { useNavigate } from 'react-router-dom';

export default function DeleteProductButton({ productId }) {
  const navigate = useNavigate();

  const handleDelete = async () => {
    // 1. Alerta de confirmación del navegador
    const confirmar = window.confirm("¿Estás seguro de que querés eliminar este producto? Esta acción no se puede deshacer.");
    if (!confirmar) return;

    try {
      // 2. Ejecutar el DELETE a tu backend
      // Nota: Si Guido ya armó el config.js con la URL, podés importarla y reemplazar el localhost
      const response = await fetch(`http://localhost:3001/api/productos/${productId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        alert("Producto eliminado correctamente.");
        // 3. Redirección al catálogo
        navigate('/productos'); 
      } else {
        alert("Hubo un problema al intentar eliminar el producto.");
      }
    } catch (error) {
      console.error("Error de conexión:", error);
      alert("Error de conexión con el servidor.");
    }
  };

  return (
    <button onClick={handleDelete} style={{ backgroundColor: 'red', color: 'white', padding: '8px 12px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
      Eliminar
    </button>
  );
}