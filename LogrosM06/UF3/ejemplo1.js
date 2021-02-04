/*Accede a elementos html por id, class y name*/
window.onload = function(){
    updateH1();
    updateLinks();
    updateAlt();
}

function updateH1(){
    document.getElementById("titulo").innerText = "Los videojuegos de Jesús";
}

function updateLinks(){
    elements = document.getElementsByClassName("navigation-link");
    for (let index = 0; index < elements.length; index++) {
        const element = elements[index];
        element.setAttribute('href', 'http://www.google.com​');
    }
}

function updateAlt(){
    document.getElementsByName("paisaje")[0].setAttribute('alt', 'logro desbloqueado');
}