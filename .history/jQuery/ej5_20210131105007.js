$("input[name=construir]").click(function () {
    //insertamos elemento al final de la lista
    var valorTexto = $('li:last').text() * 2;
    $("li:last").after("<li>" + valorTexto + "</li>");
})


function construir() {
    $child = $('ul li:last-child').innerText;
    $child = $child * 2;
    $input = '<li>' + $child + '<li>';
    $('ul').append($input);
}
