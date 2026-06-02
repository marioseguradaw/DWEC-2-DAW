// Autor: Mario Segura Abad
// Fecha: 12/05/2026


// 1.6. Estructuras de control y bucles
let mayorDe30;
let edad = prompt('¿Cuántos años tienes?');

if (edad > 30) {
    mayorDe30 = true;
} else {
    mayorDe30 = false;
}

/* También puede escribirse como */
let mayorDe30_2 = (edad > 30) ? true : false;
// Se evalúa la condición (edad > 30)
// Si es verdadera, se asigna a la variable "mayorDe30_2" el valor indicado tras '?' (true);
// Si es falsa, se asigna el valor indicado tras ':' (false).

/* Bucle for of */
let colores = ["azul", "rojo", "blanco"];

// Bucle "for" tradicional
for (let i=0; i<colores.length; i++) {
    console.log(colores[i]);
}

// Bucle "for of"
for (let color of colores) {
    // La variable "color" almacena el elemento del array
    // que se esté iterando
    // Equivalencia: color = colores[i]
    console.log(color);
}