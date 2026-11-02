import { useNavigate } from 'react-router-dom';
import { API_URL } from '../config.js';

export default function DeleteProductButton({ productId }) {
  const navigate = useNavigate();

  const handleDelete = async () => {
    const confirmar = window.confirm("¿Estás seguro de que querés eliminar este producto? Esta acción no se puede deshacer.");
    if (!confirmar) return;

    try {
      const response = await fetch(`${API_URL}/api/productos/${productId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        alert("Producto eliminado correctamente.");
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
    <button 
      onClick={handleDelete} 
      style={{ backgroundColor: 'red', color: 'white', padding: '8px 12px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
    >
      Eliminar
    </button>
  );
}