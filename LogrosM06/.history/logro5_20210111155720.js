/*
Resuelve algoritmos usando condicionales, bucles y funciones.
Crea una función para saber si un número es par. Y una función para saber si un número es primo.
Crea una página para que nos diga si es primo o no.
*/

var num;
var num = prompt("Introduzca un numero: ");
let par = 'par';
let primo = 'primo';

document.write(num);

function par(num) {
    if (num % 2 != 0) {
        par = 'impar';
    }
}

function primo(num){
    
}
function primo(numero) {

    for (var i = 2; i < numero; i++) {

        if (numero % i === 0) {
            return false;
        }

    }

    return numero !== 1;
}