import { useEffect, useState } from "react";
import "./ProductList.css";

const API_URL = "http://localhost:3001/api/productos";

function ProductList() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(API_URL)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Error ${res.status} al obtener los productos`);
        }
        return res.json();
      })
      .then((data) => setProductos(data))
      .catch(() => setError("Ocurrió un error al cargar los productos."))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p className="product-list__estado">Cargando productos...</p>;
  }

  if (error) {
    return <p className="product-list__estado">{error}</p>;
  }

  return (
    <p className="product-list__estado">
      {productos.length} productos cargados correctamente.
    </p>
  );
}

export default ProductList;
