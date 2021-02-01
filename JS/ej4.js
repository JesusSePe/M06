let forms = document.getElementsByTagName('form');
let lastFormElement = forms[0].lastElementChild;
let cursos = document.getElementsByName('cursos');
var lastCurso = cursos[cursos.length - 1];


for (curso of cursos) {
    curso.addEventListener('change', wraper);
}

function wraper() {
    if (lastCurso.checked) {
        customCreateElement("label", "Especificar:", forms[0], lastFormElement);
        customCreateElement("input", "", forms[0], lastFormElement, {type: "text", name: "otros_input"});
        customCreateElement("br", "", forms[0], lastFormElement);
    } else {
        let hermanoAnterior = lastFormElement.previousElementSibling;
        customDeleteElement(hermanoAnterior);
        hermanoAnterior = lastFormElement.previousElementSibling;
        customDeleteElement(hermanoAnterior);
        hermanoAnterior = lastFormElement.previousElementSibling;
        customDeleteElement(hermanoAnterior);
    }
}

function customCreateElement(tag, text, parent, nextItem,  attributes) {
    // tag, text, parent node, next item ()
    let element = document.createElement(tag);
    if (text){
        // In case there's a text defined by the user, that text will be added. Otherwise, a predefined text will be added.
        var text = document.createTextNode(text);
    } else {
        var text = document.createTextNode("Sample text");
    }
    element.appendChild(text);
    
    if (attributes){
        for (const attribute in attributes) {
            const value = attributes[attribute];
            element.setAttribute(attribute, value);
        }
    }
    
    if (nextItem){
        // In case there's a specified item that must be before the input, that item is needed. Otherwise, the new element is added at the end of the parent node.
        parent.insertBefore(element, nextItem);
    } else {
        parent.appendChild(element);
    }

}

function customDeleteElement(elementToDelete) {
    // The element provided is deleted from it's parent.
    elementToDelete.parentNode.removeChild(elementToDelete);
}