async function cargarDestacados() {
    try {
        const catalogo = await obtenerCatalogo();

        const destacados = catalogo.filter(
            producto => producto.destacado === true
        );

        const contenedor = document.getElementById("destacados-container");

        if (!contenedor) {
            console.error("No existe #destacados-container");
            return;
        }

        destacados.forEach(producto => {
            const tarjeta = document.createElement("article");

            tarjeta.classList.add("tarjeta-producto");

        // enlace hacia la pag de detalle del producto
        // se envolvio cada tarjeta <article> dentro de un <a>
            tarjeta.innerHTML = `
                <a href="producto.html?id=${producto.id}">
                    <img
                        src="${producto.imagen}"
                        alt="${producto.nombre}"
                    >
                    <div class="tarjeta-info">
                        <h3>${producto.nombre}</h3>

                        <p class="precio">
                            $${producto.precio.toLocaleString("es-AR")}
                        </p>

                        <p class="descripcion">
                            ${producto.descripcion}
                        </p>
                    </div>
                </a>
            `;

            contenedor.appendChild(tarjeta);
        });

    } catch (error) {
        console.error("Error al cargar los productos:", error);
    }
}

cargarDestacados();

