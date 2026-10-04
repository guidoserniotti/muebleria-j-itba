import './ContactForm.css';

function ContactForm() {
  return (
    <form className="contact-form">
      <h2>Contacto</h2>

      <div className="contact-form__field">
        <label htmlFor="nombre">Nombre</label>
        <input id="nombre" name="nombre" type="text" />
      </div>

      <div className="contact-form__field">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" />
      </div>

      <div className="contact-form__field">
        <label htmlFor="mensaje">Mensaje</label>
        <textarea id="mensaje" name="mensaje" />
      </div>

      <button type="submit">Enviar</button>
    </form>
  );
}

export default ContactForm;
