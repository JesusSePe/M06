/*
 Donat el html (logro1UF3.html) modifica el text de l’enllaç de “Mi facebook” per
“Mi twitter” i l’href de l’enllaç per “http://twitter.com/mi-pagina-de-twitter”. Esborra el títol i
l’enllaç de “Avisos legales”
*/
window.onload = function () {
    footer = document.getElementsByTagName('footer')[0];
    Facebook = footer.getElementsByTagName('a')[1];
    changeText(Facebook, 'Mi Twitter');
    changeLink(Facebook, "http://twitter.com/mi-pagina-de-twitter");
    legal = footer.getElementsByTagName('a')[0];
    deleteItem(legal);
    legalLink = footer.getElementsByTagName('h4')[0];
    deleteItem(legalLink);
}
function changeText(item, text){
    item.innerText = text;
}
function changeLink(item, link){
    item.setAttribute('href', link);
}
function deleteItem(item){
    item.remove();
}