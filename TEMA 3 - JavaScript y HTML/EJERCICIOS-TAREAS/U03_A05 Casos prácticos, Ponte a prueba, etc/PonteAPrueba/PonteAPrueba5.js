// Autor: Mario Segura Abad
// Fecha: 25/11/2025


// Expresión regular del documento
const regexDoc = /^[0-9ABC][0-9]{7}[XYZ][1-5]$/;

// Ejemplos válidos
let ejemplosValidos = [
    "A1234567X3",
    "01234567Y5",
    "C9999999Z1",
    "34567890X2"
];

// Ejemplos no válidos
let ejemplosInvalidos = [
    "D1234567X3", // Carácter 1 no permitido
    "A12345X7X3", // Caracteres 2-8 incorrectos
    "A1234567W3", // Carácter 9 no permitido
    "A1234567X8", // Carácter 10 fuera de rango
    "A1234567X33", // Demasiados caracteres
    "A123456" // Muy corto
];

// Test de validación
console.log("---- DOCUMENTOS VÁLIDOS ----");
ejemplosValidos.forEach(doc => {
    console.log(doc, regexDoc.test(doc));
});

console.log("---- DOCUMENTOS INVÁLIDOS ----");
ejemplosInvalidos.forEach(doc => {
    console.log(doc, regexDoc.test(doc));
});