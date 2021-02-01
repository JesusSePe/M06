$(document).ready(function () {
    $("input[name=construir]").on("click", function () {
        window.alert("Ready!");
        construir();
    })
});



function construir() {
    $child = $('ul li:last-child').innerText;
    $child = $child * 2;
    $input = '<li>' + $child + '<li>';
    $('ul').append($input);
}
