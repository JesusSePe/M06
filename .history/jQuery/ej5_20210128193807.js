$("construir").click(function(){
    construir();
});

function construir() {
    $child = $('ul li:last-child').innerText;
    $('ul').append('<li>'($child * 2))
}
