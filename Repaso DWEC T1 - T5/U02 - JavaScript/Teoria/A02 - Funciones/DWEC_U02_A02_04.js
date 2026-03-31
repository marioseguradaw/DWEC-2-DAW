// Autor: Mario Segura Abad
// Fecha: 31/03/2026


// 2.4. Funciones flecha
function sumar(a, b) {
    return a + b;
}
function restar(a, b) {
    console.log("Restando:");
    return a - b;
}

/* Expresado como funciones flecha */

// El cuerpo de la función solo tiene una línea. Se pueden
// omitir las llaves y el 'return'
let sumar2 = (a, b) => a + b;

// El cuerpo de la función tiene varias líneas. Se deben
// incluir las llaves y el 'return'
let restar2 = (a, b) => {
    console.log("Restando");
    return a - b;
}