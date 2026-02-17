// Autor: Mario Segura Abad
// Fecha: 25/09/2025

// =============================
// Ejemplos básicos de JavaScript
// =============================

// Mostrar un mensaje en consola
console.log("MENSAJE");

// Concatenación de cadenas y números
console.log('1' + 2 ); // "12"
console.log(2 + '1');  // "21"

// Operaciones con strings convertidos a número
console.log(6 - '2');   // 4
console.log('4' / '2'); // 2

// Operadores de asignación
let a = 5;
a += 5; // Igual que (a = a + 5)
a /= 3; // Igual que (a = a / 3)
console.log(a);

// =============================
// Entrada del usuario con prompt
// =============================

let edad = prompt("Dime tu edad"); // El usuario introduce 40
// "prompt" devuelve un string, así que edad = "40"
let edadMasDiez = edad + 10;
console.log(edadMasDiez); // "4010" (concatenación en lugar de 50)

// Conversiones a número
parseInt("3");       // 3
parseFloat("3.155"); // 3.155
Number("3");         // 3
+"3";                // 3 (Operador unario)

console.log(+"3" + 4); // 7

// Ejemplo correcto usando conversión
let edad2 = prompt("Dime tu edad"); // Usuario introduce 40
let edadMasDiez2 = Number(edad2) + 10; // Convertimos a número
console.log(edadMasDiez2); // 50

// =============================
// Comprobaciones con isNaN
// =============================
console.log(isNaN("5rt"));     // true (no es un número válido)
console.log(isNaN("541"));     // false
console.log(isNaN("285.32"));  // false
console.log(isNaN("2e16"));    // false

// =============================
// Comparaciones
// =============================
console.log(0 == false);   // true
console.log('' == false);  // true
console.log(0 === false);  // false (tipo distinto)
console.log('' === false); // false (tipo distinto)

// =============================
// Manejo de cadenas
// =============================
let texto = "Texto con 'comillas' dentro";
console.log(texto);

// =============================
// Condicionales
// =============================
let mayorDe30;  
let edad3 = prompt("¿Cuántos años tienes?");  

if (edad3 > 30) {  
  mayorDe30 = true;  
} else {  
  mayorDe30 = false;  
}
console.log("¿Mayor de 30?", mayorDe30);

// Operador ternario
let mayorDe30Bis = (edad3 > 30) ? true : false;
console.log("¿Mayor de 30? (versión ternaria)", mayorDe30Bis);

// =============================
// Bucles
// =============================
let colores = ["azul", "rojo", "blanco"];

// Bucle "for" tradicional
for (let i = 0; i < colores.length; i++) {  
  console.log(colores[i]);  
}  

// Bucle "for of"
for (let color of colores) {  
  console.log(color);  
}

// =============================
// Ventanas emergentes
// =============================

// Mostrar alerta
alert("MENSAJE");

// Cuadro de texto con prompt
let respuesta = prompt("TEXTO A MOSTRAR", "VALOR POR DEFECTO");
// respuesta almacena lo escrito por el usuario
console.log("Respuesta introducida:", respuesta);

// Cuadro de confirmación
let aceptar = confirm("¿Aceptas los términos?");
console.log("¿Acepta?", aceptar);

// Prueba de Autoría
console.log("Autor: Mario Segura Abad");
console.log("Fecha de realización: 25/09/2025");