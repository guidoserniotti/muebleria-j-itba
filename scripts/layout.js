function loadPartial(elementId, file) {

    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        });

}

function loadLayout() {

    loadPartial("header", "partials/header.html");
    loadPartial("footer", "partials/footer.html");

}

