/*Realiza un programa que simule 5 tiradas de un dado de 20 Caras.
Guarda en un array sólo los resultados pares.
Printa el array*/

let array = [];
let tiradas = 5;
let tirada = 0;

for (tirada; tirada < tiradas; tirada++){
    resultado = Math.floor(Math.random() * 2);
    if (resultado % 2 == 0){
        array.push(resultado);
    }
}

document.write(array);
