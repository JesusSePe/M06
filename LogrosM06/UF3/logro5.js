/*
Donat el html (logro1UF3.html) quant el DOM estigui totalment carregat afegeix
l’event click al element h3. En fer click al títol h3 s’ha de ocultar/mostrar el paràgraf amb el
texte “Me gusta mucho esta página”. Això ha de funcionar 3 cops, una vegada passat els 3
cops s’ha d’eliminar l’event click.
*/
count = 0;
window.onload = function () {
    banner = document.getElementsByTagName('h3')[0];
    gusta = document.getElementsByTagName("p")[2];
    banner.addEventListener("click", toggle(gusta), false)
}

function toggle(item){
    if (item.style.display === 'block'){
        item.style.display = 'none';
    } else {
        item.style.display = 'block';
    }
    count = count + 1;
}
