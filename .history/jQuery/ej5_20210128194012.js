$("construir").click(function(){
    construir();
});

function construir() {
    $child = $('ul li:last-child').innerText;
    $child = $child * 2;
    $input = '<li>' + 
    $('ul').append('<li>',$child ,'<li>');
}
