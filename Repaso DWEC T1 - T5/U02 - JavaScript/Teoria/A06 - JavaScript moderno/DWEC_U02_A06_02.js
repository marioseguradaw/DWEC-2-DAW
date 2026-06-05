// Autor: Mario Segura Abad
// Fecha: 03/06/2026


// 6.1. Modo estricto
function Coche(a, b) {
    this.marca = a;
    this.modelo = b;
}

let c1 = new Coche("Seat", "Ibiza");

console.log(c1.marca);
console.log(c1.modelo);

/* Omitiendo el uso del this */
function Coche(a, b) {
    marca = a; // Se crea una variable global con nombre 'marca'
    modelo = b; // Se crea una variable global con nombre 'modelo'
}

let c2 = new Coche("Seat", "Ibiza"); // No se genera ningun error

// Sin embargo...
console.log(c2.marca); // undefined
console.log(c2.modelo); // undefined

// Y además se crean dos variables globales
console.log(marca);
console.log(modelo);