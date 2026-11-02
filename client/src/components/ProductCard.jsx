import "./ProductCard.css";
import { Link } from "react-router-dom";

function ProductCard({ producto }) {
  const { _id, nombre, precio, imagenUrl, imagen } = producto;

  return (
    <Link className="product-card__link" to={`/productos/${_id}`}>
      <article className="product-card">
        <img className="product-card__image" src={imagenUrl || imagen} alt={nombre} />
        <div className="product-card__info">
          <h3 className="product-card__nombre">{nombre}</h3>
          <p className="product-card__precio">
            ${Number(precio).toLocaleString("es-AR")}
          </p>
        </div>
      </article>
    </Link>
  );
}

export default ProductCard;
