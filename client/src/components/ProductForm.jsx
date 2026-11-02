import { useState } from 'react';
import './ProductForm.css';

const VACIO = {
  nombre: '',
  descripcion: '',
  precio: '',
  stock: '',
  imagenUrl: '',
};

function ProductForm({ initialData = VACIO, onSubmit, textoBoton = 'Guardar producto' }) {
  const [datos, setDatos] = useState({ ...VACIO, ...initialData });
  const [errores, setErrores] = useState({});
  const [enviando, setEnviando] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDatos((prev) => ({ ...prev, [name]: value }));
  };

  const validar = () => {
    const nuevos = {};
    if (!datos.nombre.trim()) nuevos.nombre = 'El nombre es obligatorio';
    if (datos.precio === '' || Number(datos.precio) < 0 || isNaN(Number(datos.precio)))
      nuevos.precio = 'El precio es obligatorio y debe ser un número válido';
    if (datos.stock !== '' && (isNaN(Number(datos.stock)) || Number(datos.stock) < 0))
      nuevos.stock = 'El stock debe ser un número válido';
    setErrores(nuevos);
    return Object.keys(nuevos).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validar()) return;
    setEnviando(true);
    await onSubmit({
      ...datos,
      precio: Number(datos.precio),
      stock: datos.stock === '' ? 0 : Number(datos.stock),
    });
    setEnviando(false);
  };

  return (
    <form className="product-form" onSubmit={handleSubmit} noValidate>
      <label className="product-form__field">
        Nombre
        <input
          name="nombre"
          value={datos.nombre}
          onChange={handleChange}
          aria-invalid={Boolean(errores.nombre)}
        />
        {errores.nombre && <span className="product-form__error">{errores.nombre}</span>}
      </label>

      <label className="product-form__field">
        Descripción
        <textarea name="descripcion" value={datos.descripcion} onChange={handleChange} />
      </label>

      <label className="product-form__field">
        Precio
        <input
          name="precio"
          type="number"
          min="0"
          value={datos.precio}
          onChange={handleChange}
          aria-invalid={Boolean(errores.precio)}
        />
        {errores.precio && <span className="product-form__error">{errores.precio}</span>}
      </label>

      <label className="product-form__field">
        Stock
        <input
          name="stock"
          type="number"
          min="0"
          value={datos.stock}
          onChange={handleChange}
          aria-invalid={Boolean(errores.stock)}
        />
        {errores.stock && <span className="product-form__error">{errores.stock}</span>}
      </label>

      <label className="product-form__field">
        URL de la imagen
        <input name="imagenUrl" value={datos.imagenUrl} onChange={handleChange} />
      </label>

      <button className="product-form__submit" type="submit" disabled={enviando}>
        {enviando ? 'Guardando...' : textoBoton}
      </button>
    </form>
  );
}

export default ProductForm;
