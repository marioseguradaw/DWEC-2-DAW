// Autor: Mario Segura Abad
// Fecha: 25/11/2025

function obtenerEtiquetas(cadena) {
    // Buscar todas las secuencias alfanuméricas
    return cadena.match(/[A-Za-z0-9]+/g) || [];
}

// Ejemplos de uso
obtenerEtiquetas("eti1, eti2, eti3"); // ["eti1", "eti2", "eti3"]
obtenerEtiquetas("eti1 eti2 eti3"); // ["eti1", "eti2", "eti3"]
obtenerEtiquetas("eti1:eti2:eti3"); // ["eti1", "eti2", "eti3"]
obtenerEtiquetas("eti1, eti2   ;  eti3"); // ["eti1", "eti2", "eti3"]
obtenerEtiquetas("eti1.eti2  ,eti3"); // ["eti1", "eti2", "eti3"]