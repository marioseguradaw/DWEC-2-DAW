// Autor: Mario Segura Abad
// Fecha: 28/10/2025


// 6.1 Modo estricto
let miVariable = 1;

// ...Código del programa...

// Nombre de variable mal escrito (la 'v' es minúscula)
mivariable = 25; // No se genera error; además, se crea una variable nueva

"use strict";

let miVariable2 = 1;

//...Código del programa...

// Nombre de variable mal escrito
mivariable2 = 25; // ReferenceError: mivariable is not defined

function Coche(a,b) {
    this.marca = a;
    this.modelo = b;
}

let c1 = new Coche("Seat", "Ibiza");

console.log(c1.marca); // Seat
console.log(c1.modelo); // Ibiza

function Coche(a, b) {
    marca = a; // Se crea una vaariable global con nombre 'marca'
    modelo = b; // Se crea una variable globala con nombre 'modelo'
}

let c2 = new Coche("Seat", "Ibiza"); // No se genera ningún error

// Sin embargo...
console.log(c1.marca); // undefined
console.log(c1.modelo); // undefined

// Y además se crean dos variables globales
console.log(marca); // Seat
console.log(modelo); // Ibiza