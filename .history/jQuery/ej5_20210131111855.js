$(document).ready(function () {
    $("input[name=construir]").on("click", function () {
        construir();
    })
    $("input[name=borrarFirst]").on("click", function () {
        destruir1();
    })
});


function construir() {
    $child = $('ul li:last').text();
    $child = $child * 2;
    $input = '<li>' + $child + '</li>';
    $('ul').append($input);
}


function construir() {
    $child = $('ul li:last').text();
    $child = $child * 2;
    $input = '<li>' + $child + '</li>';
    $('ul').append($input);
}