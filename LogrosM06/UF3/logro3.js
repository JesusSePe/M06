window.onload = function () {
    padre = document.getElementsByTagName('p')[2].parentNode;
    customCreateElement('ol', "", padre)
    OlItem = document.getElementsByTagName('ol')[0];
    customCreateElement('li', "Element A", OlItem);
    customCreateElement('li', "Element B", OlItem);
}


function customCreateElement(tag, text, parent, nextItem, attributes) {
    // tag, text, parent node, next item ()
    let element = document.createElement(tag);
    if (text) {
        // In case there's a text defined by the user, that text will be added. Otherwise, a predefined text will be added.
        var text = document.createTextNode(text);
    } else {
        var text = document.createTextNode("");
    }
    element.appendChild(text);

    if (attributes) {
        for (const attribute in attributes) {
            const value = attributes[attribute];
            element.setAttribute(attribute, value);
        }
    }

    if (nextItem) {
        // In case there's a specified item that must be before the input, that item is needed. Otherwise, the new element is added at the end of the parent node.
        parent.insertBefore(element, nextItem);
    } else {
        parent.appendChild(element);
    }

}