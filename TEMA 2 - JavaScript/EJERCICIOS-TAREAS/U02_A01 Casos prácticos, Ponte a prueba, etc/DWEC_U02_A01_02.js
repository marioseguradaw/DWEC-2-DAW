// Autor: Mario Segura Abad
// Fecha: 25/09/2025

// =============================
// Uso de template literals
// =============================

let cadena1 = `Cadena
formada
por
varias
líneas`;
console.log("cadena1:", cadena1);

let nombre = "Mario";

// Interpolación de variables
let cadena2 = `Hola, ${nombre}.`;
console.log("cadena2:", cadena2);

// Equivalente con concatenación
// let cadena2 = "Hola, " + nombre;

// Expresiones dentro de un template literal
let cadena3 = `3 por 4 es igual a ${3 * 4}`;
console.log("cadena3:", cadena3); // "3 por 4 es igual a 12"

// Prueba de Autoría
console.log("Autor: Mario Segura Abad");
console.log("Fecha de realización: 25/09/2025");