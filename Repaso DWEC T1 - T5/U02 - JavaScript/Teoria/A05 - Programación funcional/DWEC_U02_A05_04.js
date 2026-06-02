// Autor: Mario Segura Abad
// Fecha: 02/06/2026


// 5.4. Map
let numeros = [1, 3, 5, 7];

let dobleNumeros = numeros.map(function(numero) {
    return numero * 2;
});

// No se modifica el array original
console.log(numeros); // [1, 3, 5, 7]
console.log(dobleNumeros); // [2, 6, 10, 14]