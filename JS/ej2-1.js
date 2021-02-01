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
    let buttons = document.getElementsByTagName("a");
    let lastDiv = buttons[0].previousElementSibling;
    buttons[0].addEventListener("click", function(){
            newToggleText(lastDiv, buttons[0]);
    });
}
window.onload = main();