import ProductCard from '../components/ProductCard';
import { useProducts } from '../hooks/useProducts';

function Inicio() {
  const { products, loading, error } = useProducts();
  const featuredProducts = products.filter((product) => product.destacado);
  const productsToShow =
    featuredProducts.length > 0 ? featuredProducts : products.slice(0, 4);

  return (
    <>
      <section className="inicio-heading">
        <h1>Muebles con identidad</h1>
        <p>Diseño, calidad y calidez para cada espacio de tu hogar.</p>
      </section>
      <section className="destacados">
        <h2>Productos destacados</h2>
        {loading && <p role="status">Cargando productos...</p>}
        {error && <p role="alert">{error}</p>}
        {!loading && !error && productsToShow.length === 0 && (
          <p className="sin-resultados">No hay productos destacados.</p>
        )}
        {!loading && !error && productsToShow.length > 0 && (
          <div id="destacados-container">
            {productsToShow.map((product) => (
              <ProductCard key={product._id} producto={product} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}

export default Inicio;