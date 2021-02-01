function newEnableText(element, trigger) {
    element.style.display = "block";
    trigger.innerText = "Ocultar texto";
}
function newDisableText(element, trigger) {
    element.style.display = "none";
    trigger.innerText = "Mostrar texto";
}
function newToggleTextArray(elements, trigger) {
    for (element of elements) {
        newToggleText(element, trigger);
    }
}
function newToggleText(element, trigger) {
    if (element.style.display == "none") {
            newEnableText(element, trigger);
    } else {
            newDisableText(element, trigger);
    }      
}
function main() {
    let divs = document.getElementsByTagName("div");
    let buttons = document.getElementsByTagName("a");
    buttons[0].addEventListener("click", function(){
            newToggleTextArray(divs, buttons[0])
    });
}
window.onload = main();