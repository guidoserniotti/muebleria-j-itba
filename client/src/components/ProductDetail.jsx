import { useState, useEffect } from 'react';
import './ProductDetail.css';

function ProductDetail({ producto, onVolver, onAgregarAlCarrito }) {
    const [agregado, setAgregado] = useState(false);

    useEffect(() => {
        if (!agregado) return;

        const timer = setTimeout(() => setAgregado(false), 2000);
        return () => clearTimeout(timer);
    }, [agregado]);

    if (!producto) {
        return <p>No hay ningún producto seleccionado.</p>;
    }

    const handleAgregar = () => {
        onAgregarAlCarrito(producto);
        setAgregado(true);
    };

    return (
        <section className="product-detail">
            <button className="product-detail__volver" onClick={onVolver}>
                ← Volver al listado
            </button>

            <div className="product-detail__contenido">
                <img
                    className="product-detail__imagen"
                    src={producto.imagen}
                    alt={producto.nombre}
                />

                <div className="product-detail__info">
                    <h2>{producto.nombre}</h2>
                    <p className="product-detail__descripcion">
                        {producto.descripcion}
                    </p>
                    <p className="product-detail__precio">
                        ${producto.precio}
                    </p>

                    <button
                        className="product-detail__agregar"
                        onClick={handleAgregar}
                    >
                        Añadir al carrito
                    </button>

                    {agregado && (
                        <p className="product-detail__feedback" role="status">
                            ✓ Producto agregado al carrito
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
}

export default ProductDetail;