$('name="construir"').click( "click", function( event ) {
    construir()
});

function construir() {
    $child = $('ul li:last-child').innerText;
    $child = $child * 2;
    $input = '<li>' + $child + '<li>';
    $('ul').append($input);
}
