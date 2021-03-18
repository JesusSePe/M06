/*
10 min
Filtra las etiquetas p que sean hijas directas de la etiqueta 
div y cambia el texto por "soy el amo"
*/

window.onload = function () {
    let paragrafos = document.querySelectorAll("div > p");
    for (const paragrafo of paragrafos) {
        paragrafo.innerText = "Soy el amo";
    }
}
