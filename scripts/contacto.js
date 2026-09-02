const formulario = document.getElementById("contact-form");
const mensajeExito = document.getElementById("mensaje-exito");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    // Validar los campos vacíos
    if (nombre === "" || email === "" || mensaje === "") {
        mensajeExito.textContent = "Por favor, completa todos los campos.";
        mensajeExito.style.color = "red";
        return;
    }

    // Validar el email
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!emailValido) {
        mensajeExito.textContent = "Por favor, ingresa un email válido.";
        mensajeExito.style.color = "red";
        return;
    }

    // Mensaje de éxito!!
    mensajeExito.textContent = "¡Mensaje enviado correctamente!";
    mensajeExito.style.color = "green";
});



