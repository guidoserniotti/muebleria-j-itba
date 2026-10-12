import "./ProductCard.css";

function ProductCard({ producto }) {
  const { nombre, precio, imagen } = producto;

  return (
    <article className="product-card">
      <img className="product-card__image" src={imagen} alt={nombre} />
      <div className="product-card__info">
        <h3 className="product-card__nombre">{nombre}</h3>
        <p className="product-card__precio">
          ${precio.toLocaleString("es-AR")}
        </p>
      </div>
    </article>
  );
}

export default ProductCard;
