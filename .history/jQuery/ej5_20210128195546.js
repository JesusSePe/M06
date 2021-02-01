$(document).ready(function () {
    window.alert("Ready");
    
});
$('input[value="construye"]').click(function() {
    construir()
});

function construir() {
    $child = $('ul li:last-child').innerText;
    $child = $child * 2;
    $input = '<li>' + $child + '<li>';
    $('ul').append($input);
}
