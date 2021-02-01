$(document).ready(alertaAlCargar());

function alertaAlCargar() {
    window.alert("Página cargada y lista!");
}

function checkDivs() {
    if (($('div').size())>=2) {
        window.alert("Página cargada y lista!");
    }
}