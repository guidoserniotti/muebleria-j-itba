import ProductCard from '../components/ProductCard';
import { useProducts } from '../hooks/useProducts';

function Catalogo() {
  const { products, loading, error } = useProducts();

  return (
    <section className="catalogo">
      <h1>Catálogo de productos</h1>
      {loading && <p role="status">Cargando productos...</p>}
      {error && <p role="alert">{error}</p>}
      {!loading && !error && products.length === 0 && (
        <p className="sin-resultados">No hay productos disponibles.</p>
      )}
      {!loading && !error && products.length > 0 && (
        <div className="grilla-productos">
          {products.map((product) => (
            <ProductCard key={product._id} producto={product} />
          ))}
        </div>
      )}
    </section>
  );
}

export default Catalogo;