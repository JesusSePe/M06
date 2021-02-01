function changeHidden(element, to){
    element.hidden = to;
    element.previousElementSibling.hidden = element.hidden;
}

function main() {
    var cursos = document.getElementsByName("cursos");
    var lastCurso = cursos[cursos.length - 1];
    var otrosInput = document.getElementsByName("otros_input")[0];
    
    // fast check!
    if(lastCurso.checked){
        changeHidden(otrosInput, false);
    }

    for(curso of cursos){
        curso.addEventListener("change", function(){
            if(lastCurso.checked){
                changeHidden(otrosInput, false);
            }
            else{
                changeHidden(otrosInput, true);
            }
        });
    }
    /*
    lastCurso.addEventListener("change", function(){
        alert("Hey");
        if(lastCurso.checked && lastState == false){
            magicToggle(otrosInput);
        }
        else{
            magicToggle(otrosInput);
        }
        last_state = lastCurso.checked;
    });
    */
}

window.onload = main();