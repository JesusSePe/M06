$(document).ready(function () {
    $('input[value="construye"]').bind("click", function() {
        window.alert("Página cargada y lista!");
        construir()
    });
});


function construir() {
    $child = $('ul li:last-child').innerText;
    $child = $child * 2;
    $input = '<li>' + $child + '<li>';
    $('ul').append($input);
}
