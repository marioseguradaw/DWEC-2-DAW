// Autor: Mario Segura Abad
// Fecha: 16/01/2026


// 3.1. Async y await
async function multiplicar(a, b) {
    return a * b;
}

let a = multiplicar(3, 5);

console.log(a); // Objeto promesa

a.then(resultado => console.log(resultado)); // 15