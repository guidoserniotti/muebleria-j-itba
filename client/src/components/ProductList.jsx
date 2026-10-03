import ProductCard from "./ProductCard";
import "./ProductList.css";

function ProductList({ productos }) {
  return (
    <div className="product-list">
      {productos.map((producto) => (
        <ProductCard key={producto.id} producto={producto} />
      ))}
    </div>
  );
}

export default ProductList;
