import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ProductDetail from '../components/ProductDetail';
import { API_URL } from '../config';

function ProductoDetalle({ onAgregarAlCarrito }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [noEncontrado, setNoEncontrado] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const cargarProducto = async () => {
      setCargando(true);
      setProducto(null);
      setNoEncontrado(false);
      setError(null);

      try {
        const response = await fetch(`${API_URL}/api/productos/${id}`, {
          signal: controller.signal,
        });

        if (response.status === 404) {
          setNoEncontrado(true);
          return;
        }

        if (!response.ok) {
          throw new Error('No se pudo cargar el producto.');
        }

        const productoRecibido = await response.json();
        setProducto({
          ...productoRecibido,
          imagen: productoRecibido.imagenUrl,
        });
      } catch (fetchError) {
        if (fetchError.name !== 'AbortError') {
          setError('No se pudo cargar el producto. Intentá nuevamente.');
        }
      } finally {
        if (!controller.signal.aborted) {
          setCargando(false);
        }
      }
    };

    cargarProducto();

    return () => controller.abort();
  }, [id]);

  if (cargando) {
    return <p role="status">Cargando producto...</p>;
  }

  if (noEncontrado) {
    return (
      <section>
        <h2>Producto no encontrado</h2>
        <p>El producto que buscás no existe.</p>
        <button onClick={() => navigate('/productos')}>
          Volver al listado
        </button>
      </section>
    );
  }

  if (error) {
    return (
      <section>
        <p role="alert">{error}</p>
        <button onClick={() => window.location.reload()}>
          Reintentar
        </button>
      </section>
    );
  }

  return (
    <ProductDetail
      producto={producto}
      onVolver={() => navigate('/productos')}
      onAgregarAlCarrito={onAgregarAlCarrito}
    />
  );
}

export default ProductoDetalle;