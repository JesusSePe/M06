$("construir").click(function(){
    construir();
});

function construir() {
    $child = $('ul li:last-child').innerText;
    $child = $child 
    $('ul').append('<li>',($child * 2),'<li>');
}
