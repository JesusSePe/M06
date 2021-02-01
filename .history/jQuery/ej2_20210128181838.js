$(document).ready(checkDivs(docuemnt.getElementsByTagName('div')));

function checkDivs(tags) {
    $div = docuemnt.getElementsByTagName('div')
    if ($div.length >= 2) {
        window.alert("Ser el elegido es como estar enamorado,nadie te dice si lo estás o no, solamente lo sabes, al cien por cien, de la cabeza a los pies");
    }
}