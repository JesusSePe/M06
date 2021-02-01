$(document).ready(function () {
    $("input[name=construir]").on("click", function () {
        construir();
    })
    $("input[name=borrarFirst]").on("click", function () {
        destruir1();
    })
    $("input[name=borraSeleccion]").on("click", function () {
        $sacrifice = $('elementToDelete');
        destruirX($sacrifice);
    })
});


function construir() {
    $child = $('ul li:last').text() * 2;
    $input = '<li>' + $child + '</li>';
    $('ul').append($input);
}


function destruir1() {
    $remove = $('ul li:first').remove();
}

function destruirX(sacrifice) {
    $remove = $('').remove();
}