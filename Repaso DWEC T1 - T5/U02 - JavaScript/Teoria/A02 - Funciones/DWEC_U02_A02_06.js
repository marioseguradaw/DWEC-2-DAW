// Autor: Mario Segura Abad
// Fecha: 31/03/2026


// 2.6. Ámbitos y closures
function crearContador() {
    let cuenta = 0;

    // Función closure
    return function() {
        // Referencia a la variable "cuenta" del ámbito exterior a la funcion
        return cuenta++;
    };
}

let contador1 = crearContador();
console.log( contador1() ); // 0
console.log( contador1() ); // 1
console.log( contador1() ); // 2

let contador2 = crearContador();
console.log( contador2() ); // 0
console.log( contador2() ); // 1