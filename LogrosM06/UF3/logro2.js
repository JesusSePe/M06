window.onload = function () {
    let paragrafos = document.querySelectorAll("article > p");
    for (const paragrafo of paragrafos) {
        paragrafo.innerText = "Jesús Serrano Pérez";
    }
}
