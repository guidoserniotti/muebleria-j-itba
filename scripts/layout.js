/* ===================================
   LAYOUT.JS
   Carga dinámicamente el header y el footer
   en cada página usando fetch() + innerHTML.
   Script clásico (sin type="module") para evitar
   bloqueos de CORS al abrir el HTML directo.
   =================================== */

function cargarLayout() {
  // Busca el archivo del header y lo inyecta en el placeholder
  const headerFetch = fetch('partials/header.html')
    .then(res => res.text())
    .then(html => {
      document.getElementById('header-placeholder').innerHTML = html;
    });

  // Busca el archivo del footer y lo inyecta en el placeholder
  const footerFetch = fetch('partials/footer.html')
    .then(res => res.text())
    .then(html => {
      document.getElementById('footer-placeholder').innerHTML = html;
    });

  // Devuelve una Promise que se resuelve cuando AMBOS (header y footer)
  // ya están inyectados en el DOM. Así otros scripts pueden esperar
  // con .then() a que el header exista antes de tocarlo (ej: el contador del carrito)
  return Promise.all([headerFetch, footerFetch]);
}