/*
Crea una función para saber si un número es  múltiplo de 3 y a su vez de 5. Y una función para calcular su factorial.
*/

var num;
var num = prompt("Introduzca un numero: ");
let multi = 'es multiplo de 3 y de 5';
let res_factorial = 0;

multiple(num);
factorial(num);

document.write('El numero ' + num);
document.write(' ' + multi);
document.write(' y su factorial es: ' + res_factorial);

function multiple(num) {
    if (num % 3 != 0 || num % 5 != 0) {
        multi = 'no es multiplo de 3 y de 5';
    }
}

function factorial(num) {
    var total = 1;
    for (i = 1; i <= num; i++) {
        total = total * i;
    }
    res_factorial = total;
}
