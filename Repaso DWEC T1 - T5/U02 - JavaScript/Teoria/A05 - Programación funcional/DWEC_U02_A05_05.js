// Autor: Mario Segura Abad
// Fecha: 02/06/2026


// 5.5. Reduce
let numeros = [2, 5, 4];

let total = numeros.reduce(
    // Primer parámetro: función de callback
    function(acc, numero) {
        return acc + numero;
    },
    // Segundo parámetro: valor inicial
0);

console.log(total); // 11