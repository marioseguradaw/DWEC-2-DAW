// Autor: Mario Segura Abad
// Fecha: 05/12/2025


// 1.1. Funcionamiento básico
let letras = ["a", "b", "c"];

let letrasMayusculas = letras.map(function(letra) {
    console.log(`Convirtiendo letra '${letra}'`);
    return letra.toUpperCase();
});

console.log("Esta línea se ejecuta después de que termine 'map'");