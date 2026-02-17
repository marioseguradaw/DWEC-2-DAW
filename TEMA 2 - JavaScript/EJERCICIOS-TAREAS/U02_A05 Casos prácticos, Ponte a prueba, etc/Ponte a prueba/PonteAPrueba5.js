// Autor: Mario Segura Abad
// Fecha: 24/10/2025

function mediaAritmetica(...numeros) {
    //Si no hay números, devolvemos el valor 0
    if(numeros.length === 0) {
        return 0;
    }

    // Sumamos todos los valores y dividimos entre la cantidad
    return numeros.reduce((total, numero) => total + numero, 0) / numeros.length;
}

// Pruebas
console.log("Media 1:", mediaAritmetica(5, 10, 15));
console.log("Media 2:", mediaAritmetica(4, 8, 2));
console.log("Media 3:", mediaAritmetica(10, 15, 20));
console.log("Media 4:", mediaAritmetica(1, 2, 3));
console.log("Media 5:", mediaAritmetica(2, 10, 33));