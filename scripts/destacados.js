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

            tarjeta.innerHTML = `
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
            `;

            contenedor.appendChild(tarjeta);
        });

    } catch (error) {
        console.error("Error al cargar los productos:", error);
    }
}

cargarDestacados();

