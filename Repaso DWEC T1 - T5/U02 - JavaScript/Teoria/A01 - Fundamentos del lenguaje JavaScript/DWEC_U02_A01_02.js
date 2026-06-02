// Autor: Mario Segura Abad
// Fecha: 05/05/2026


// 1.4. Tipos de datos y conversiones
let edad = prompt("Dime tu edad"); // El usuario introduce 40. Pero "prompt" siempre devuelve un string, así que (edad = "40")
let edadMasDiez = edad + 10;
console.log(edadMasDiez); // "4010" (en lugar de 50)
// Se ha producido la conversion de tipo de 10 a "10", ya que el operador "+" se ha comportado como "concatenar" en lugar de "sumar"

/* Conversión a número */
parseInt("3"); // 3
parseFloat("3.1555"); // 3.1555
+"3"; // 3 (Operador unario)

console.log(+"3" + 4); // 7

// Ejemplo anterior ejecutado de manera correcta
let edad2 = prompt("Dime tu edad"); // El usuario introduce 40.
let edadMasDiez2 = Number(edad2) + 10; // Convertimos "edad" a número
console.log(edadMasDiez2); // 50

/* Función isNaN */
isNaN("5rt"); // true (no es un numero válido)
isNaN("541"); // false
isNaN("285.32"); // false
isNaN("2e16"); // false

/* Comprobación ===, !== */
let (0 == false); // true
let ('' == false); // true

let (0 === false); // false (distinto tipo)
let ('' === false); // false (distinto tipo)