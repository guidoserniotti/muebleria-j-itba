import { useState } from 'react';
import './ContactForm.css';

function ContactForm() {
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' });
  const [errores, setErrores] = useState({});
  const [enviado, setEnviado] = useState(false);

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

    if (Object.keys(nuevosErrores).length === 0) {
      setEnviado(true);
      setForm({ nombre: '', email: '', mensaje: '' });
    }
  };

  const handleEnviarOtro = () => {
    setEnviado(false);
  };

  if (enviado) {
    return (
      <div className="contact-form">
        <h2>Contacto</h2>
        <p className="contact-form__success" role="alert">
          Mensaje enviado. Te contactamos a la brevedad.
        </p>
        <button type="button" onClick={handleEnviarOtro}>
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <h2>Contacto</h2>

      <div className="contact-form__field">
        <label htmlFor="nombre">Nombre</label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          value={form.nombre}
          onChange={handleChange}
          aria-invalid={errores.nombre ? 'true' : 'false'}
          aria-describedby={errores.nombre ? 'error-nombre' : undefined}
        />
        {errores.nombre && (
          <p id="error-nombre" className="contact-form__error" role="alert">
            {errores.nombre}
          </p>
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
          aria-invalid={errores.email ? 'true' : 'false'}
          aria-describedby={errores.email ? 'error-email' : undefined}
        />
        {errores.email && (
          <p id="error-email" className="contact-form__error" role="alert">
            {errores.email}
          </p>
        )}
      </div>

      <div className="contact-form__field">
        <label htmlFor="mensaje">Mensaje</label>
        <textarea
          id="mensaje"
          name="mensaje"
          value={form.mensaje}
          onChange={handleChange}
          aria-invalid={errores.mensaje ? 'true' : 'false'}
          aria-describedby={errores.mensaje ? 'error-mensaje' : undefined}
        />
        {errores.mensaje && (
          <p id="error-mensaje" className="contact-form__error" role="alert">
            {errores.mensaje}
          </p>
        )}
      </div>

      <button type="submit">Enviar</button>
    </form>
  );
}

export default ContactForm;
