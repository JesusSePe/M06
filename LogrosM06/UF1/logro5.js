/*
Resuelve algoritmos usando condicionales, bucles y funciones.
Crea una función para saber si un número es par. Y una función para saber si un número es primo.
Crea una página para que nos diga si es primo o no.
*/

var num;
var num = prompt("Introduzca un numero: ");
let parv = 'par';
let primov = 'primo';

par(num);
primo(num);

document.write('El numero ' + num);
document.write(' es '+ parv);
document.write(' y ' + primov);

function par(num) {
    if (num % 2 != 0) {
        parv = 'impar';
    }
}

function primo(num){
    for (let index = 1; index <= num; index++) {
        if (num % index == 0 && num != index && index != 1) {
            primov = 'no primo'
        }
    }
}
