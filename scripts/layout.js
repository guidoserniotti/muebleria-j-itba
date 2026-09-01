function cargarLayout() {
    const headerFetch = fetch("partials/header.html")
    .then(res => res.text())
    .then(html => {
        document.getElementById("header").innerHTML = html;
    });
    const footerFetch = fetch("partials/footer.html")
    .then(res => res.text())
    .then(html => {
    document.getElementById("footer").innerHTML = html;
    });
    return Promise.all([headerFetch, footerFetch]);
}

