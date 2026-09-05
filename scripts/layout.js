//Se agrego .catch() a los fetch de header.html y footer.html

function cargarLayout() {
    const headerFetch = fetch("partials/header.html")
    .then(res => res.text())
    .then(html => {
        document.getElementById("header").innerHTML = html;
    })
    .catch(error => {
        console.error("No se pudo cargar el header:", error);
    });

    const footerFetch = fetch("partials/footer.html")
    .then(res => res.text())
    .then(html => {
        document.getElementById("footer").innerHTML = html;
    })
    .catch(error => {
        console.error("No se pudo cargar el footer:", error);
    });
    
    return Promise.all([headerFetch, footerFetch]);
}

