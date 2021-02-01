$('input[name="construir"]').click(function() {
    window.alert("Hey!");
    construir()
});

function construir() {
    $child = $('ul li:last-child').innerText;
    $child = $child * 2;
    $input = '<li>' + $child + '<li>';
    $('ul').append($input);
}
