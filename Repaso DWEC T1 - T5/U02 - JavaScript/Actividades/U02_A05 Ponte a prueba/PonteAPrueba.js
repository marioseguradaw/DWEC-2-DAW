// Autor: Mario Segura Abad
// Fecha: 04/06/2026

/**
 * Calcula la media aritmetica de un conjunto variable de números.
 * @param {...number} valores - Lista de números pasados por parámetro.
 * @returns {number} La media aritmética de los valores.
 */
function calcularMedia(...valores) {
    // Evitamos la división por cero si no se pasan parámetros
    if (valores.length === 0) return 0;

    // Reducimos el array sumando todos los elementos de forma funcional
    const sumaTotal = valores.reduce((acc, valorActual) => acc + valorActual, 0);

    // Devolvemos la media aritmética
    return sumaTotal / valores.length;
}

// ===========================================
// EJEMPLOS DE USO Y COMPROBACION
// ===========================================

console.log("Media de 4, 8, 15, 16, 23, 42:");
console.log(calcularMedia(4, 8, 15, 16, 23, 42)); // Resultado: 18

console.log("\nMedia de 10, 20, 30, 40:");
console.log(calcularMedia(10, 20, 30, 40));       // Resultado: 25

console.log("\nMedia de un solo número (5):");
console.log(calcularMedia(5));                    // Resultado: 5

console.log("\nMedia sin parámetros:");
console.log(calcularMedia());                     // Resultado: 0