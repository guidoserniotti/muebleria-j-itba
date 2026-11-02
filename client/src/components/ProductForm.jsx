import { useState } from 'react';

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
    <form onSubmit={handleSubmit} noValidate>
      <label>
        Nombre
        <input name="nombre" value={datos.nombre} onChange={handleChange} />
      </label>
      {errores.nombre && <p className="error">{errores.nombre}</p>}

      <label>
        Descripción
        <textarea name="descripcion" value={datos.descripcion} onChange={handleChange} />
      </label>

      <label>
        Precio
        <input name="precio" type="number" min="0" value={datos.precio} onChange={handleChange} />
      </label>
      {errores.precio && <p className="error">{errores.precio}</p>}

      <label>
        Stock
        <input name="stock" type="number" min="0" value={datos.stock} onChange={handleChange} />
      </label>
      {errores.stock && <p className="error">{errores.stock}</p>}

      <label>
        URL de la imagen
        <input name="imagenUrl" value={datos.imagenUrl} onChange={handleChange} />
      </label>

      <button type="submit" disabled={enviando}>
        {enviando ? 'Guardando...' : textoBoton}
      </button>
    </form>
  );
}

export default ProductForm;
