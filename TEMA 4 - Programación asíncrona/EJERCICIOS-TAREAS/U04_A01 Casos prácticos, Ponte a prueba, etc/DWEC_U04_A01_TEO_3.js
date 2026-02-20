// Autor: Mario Segura Abad
// Fecha: 05/12/2025


// 1.2. Programación asíncrona
function saludar() {
    console.log("hola");
}

// Mostrará "hola" transcurridos dos segundos
setTimeout(saludar, 2000);

console.log("Esta línea se ejecutará ANTES de que se muestre por pantalla 'hola'");

// Mostrará "hola" transcurridos dos segundos
setTimeout(function() {
    console.log("hola");
}, 2000);

// Mostrará "adiós" transcurridos tres segundos
setTimeout(function() {
    console.log("adiós");
}, 3000);