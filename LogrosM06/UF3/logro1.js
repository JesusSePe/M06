window.onload = function () {
    updateH1();
    updateLinks();
    updateAlt();
}

function updateH1() {
    document.getElementById("titulo").innerText = "Los videojuegos de Jesús";
}

function updateLinks() {
    links = document.getElementsByClassName("navigation-link");
    for (let index = 0; index < links.length; index++) {
        const link = links[index];
        link.setAttribute('href', 'http://www.google.com');
    }
}

function updateAlt() {
    document.getElementsByName("paisaje")[0].setAttribute('alt', 'logro desbloqueado');
}