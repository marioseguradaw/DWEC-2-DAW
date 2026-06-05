// Autor: Mario Segura Abad
// Fecha: 03/06/2026


// 6.1. Modo estricto
let miVariable = 1;

// ...Código del programa...

// Nombre de variable mal escrito (la 'v' es minúscula)
mivariable = 25; // No se genera error; además, se crea una variable nueva

/* Usando modo estricto */
"use strict"

let miVariable2 = 1;

// ...Código del programa...

// Nombre de variable mal escrito
mivariable2 = 25; // ReferenceError: mivariable2 is not defined