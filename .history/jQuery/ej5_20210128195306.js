$('input[name="construir"]').click(function() {
    construir()
});

function construir() {
    window.alert("Hey");
    $child = $('ul li:last-child').innerText;
    $child = $child * 2;
    $input = '<li>' + $child + '<li>';
    $('ul').append($input);
}
