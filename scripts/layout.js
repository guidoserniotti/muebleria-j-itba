function loadPartial(elementld, file) {
  fetch(file)
    .then(response =>
 response.text())
     .then(data => {
document.getElementByld(elementld).innerHTML = data; });
}

function loadLayout() {
  loadPartial("header", "partials/header.html");
  loadPartial("footer", "partials/footer.html");
}
