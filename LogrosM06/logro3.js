/*
15 min
Ej 9 wiket
*/
var text;
var Nota = prompt("Nota: ");
if (Nota >= 9) {
    text = "Excelente";
} else if (Nota >= 7) {
    text = "Notable";
} else if (Nota >= 5) {
    text = "Suficiente";
} else if (Nota >= 0) {
    text = "Insuficiente";
} else {
    text = "Nice try";
}
document.write(text);