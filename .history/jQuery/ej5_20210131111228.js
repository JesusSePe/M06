$(document).ready(function () {
    $("input[name=construir]").on("click", function () {
        construir();
    })
});



function construir() {
    $child = $('ul li:last').text();
    $child = $child * 2;
    $input = '<li>' + $child + '<li>';
    $('ul').append($input)·;
}
