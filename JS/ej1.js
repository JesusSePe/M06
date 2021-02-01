 function newEnableText(element, trigger) {
    element.style.display = "block";
    trigger.innerText = "Ocultar texto";
}

function newDisableText(element, trigger) {
    element.style.display = "none";
    trigger.innerText = "Mostrar texto";
}
function newToggleText(element, trigger) {
    if (element.style.display == "none") {
            newEnableText(element, trigger);
    } else {
            newDisableText(element, trigger);
    }      
}
function main() {
    let paragraphs = document.getElementsByTagName("p");
    let buttons = document.getElementsByTagName("a");
    buttons[0].addEventListener("click", function(){
            newToggleText(paragraphs[0], buttons[0])
    });
}
document.onload = main();