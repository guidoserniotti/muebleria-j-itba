import { useEffect, useState } from "react";
import { API_URL } from "../config";

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function fetchProducts() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(`${API_URL}/api/productos`, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("No se pudieron cargar los productos.");
        }

        const data = await response.json();

        if (!Array.isArray(data)) {
          throw new Error("La respuesta de productos no es válida.");
        }

        setProducts(data);
      } catch (fetchError) {
        if (fetchError.name !== "AbortError") {
          setError(
            fetchError instanceof TypeError
              ? "No se pudo conectar con el servidor. Verificá tu conexión e intentá nuevamente."
              : fetchError.message,
          );
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchProducts();

    return () => controller.abort();
  }, []);

  return { products, loading, error };
}
