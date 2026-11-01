import "./ProductCard.css";

function ProductCard({ producto, onClick }) {
  const { _id, nombre, precio, imagenUrl, imagen } = producto;

  return (
    <article
      className="product-card"
      onClick={onClick}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          onClick?.();
        }
      }}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      <img className="product-card__image" src={imagenUrl || imagen} alt={nombre} />
      <div className="product-card__info">
        <h3 className="product-card__nombre">{nombre}</h3>
        <p className="product-card__precio">
          ${Number(precio).toLocaleString("es-AR")}
        </p>
      </div>
    </article>
  );
}

export default ProductCard;
