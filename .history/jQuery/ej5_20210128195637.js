$(document).ready(function () {
    $('input[value="construye"]').click(function() {
        window.alert("Ready");
        construir()
    });
});


function construir() {
    $child = $('ul li:last-child').innerText;
    $child = $child * 2;
    $input = '<li>' + $child + '<li>';
    $('ul').append($input);
}
