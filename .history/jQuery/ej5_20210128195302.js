$('input[name="construir"]').click(function() {
    construir()
});

function construir() {
    window.alert("Página cargada y lista!");
    $child = $('ul li:last-child').innerText;
    $child = $child * 2;
    $input = '<li>' + $child + '<li>';
    $('ul').append($input);
}
