// Autor: Mario Segura Abad
// Fecha: 02/06/2026

function media(...numeros) {
    if (numeros.length === 0) return 0;
    let suma = numeros.reduce((acc, numero) => acc + numero, 0);
    return suma / numeros.length;   
}

// Ejemplos de uso
console.log(media()); // 0
console.log(media(2,4)); // 3
console.log(media(1)); // 1
console.log(media(3, 5, 7, 14)); // 7.25