// Autor: Mario Segura Abad
// Fecha: 23/10/2025


// 5.5. "Reduce"
let numeros = [2, 5, 4];

let total = numeros.reduce(
    // Primer parámetro: función callback
    function(acc, numeros) {
        return acc + numeros;
    },
    // Segundo parámetro: valor inicial
0);

console.log(total); // 11