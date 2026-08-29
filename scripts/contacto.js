const formulario = document.getElementById("contact-form");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (nombre === "" || email === "" || mensaje === "") {
        alert("Por favor, completa todos los campos.");
        return;
    }

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!emailValido) {
        alert("Por favor, ingresa un email válido.");
        return;
    }

    const mensajeExito = document.getElementById("mensaje-exito");

    mensajeExito.textContent = "Mensaje enviado correctamente!";
});

