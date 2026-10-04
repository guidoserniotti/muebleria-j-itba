import { useState } from 'react';
import './ContactForm.css';

function ContactForm() {
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' });
  const [errores, setErrores] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrores((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevosErrores = {};

    if (!form.nombre.trim()) {
      nuevosErrores.nombre = 'El nombre es obligatorio.';
    }

    if (!form.email.trim()) {
      nuevosErrores.email = 'El email es obligatorio.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nuevosErrores.email = 'Ingresá un email válido, p. ej. ana@mail.com.';
    }

    if (!form.mensaje.trim()) {
      nuevosErrores.mensaje = 'El mensaje es obligatorio.';
    }

    setErrores(nuevosErrores);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2>Contacto</h2>

      <div className="contact-form__field">
        <label htmlFor="nombre">Nombre</label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          value={form.nombre}
          onChange={handleChange}
        />
        {errores.nombre && (
          <p className="contact-form__error">{errores.nombre}</p>
        )}
      </div>

      <div className="contact-form__field">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
        />
        {errores.email && (
          <p className="contact-form__error">{errores.email}</p>
        )}
      </div>

      <div className="contact-form__field">
        <label htmlFor="mensaje">Mensaje</label>
        <textarea
          id="mensaje"
          name="mensaje"
          value={form.mensaje}
          onChange={handleChange}
        />
        {errores.mensaje && (
          <p className="contact-form__error">{errores.mensaje}</p>
        )}
      </div>

      <button type="submit">Enviar</button>
    </form>
  );
}

export default ContactForm;
