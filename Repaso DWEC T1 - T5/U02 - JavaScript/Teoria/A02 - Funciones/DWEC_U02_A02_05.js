// Autor: Mario Segura Abad
// Fecha: 31/03/2026


// 2.5. Parametros "rest" y sintaxis "spread"
function sumar(a, b) {
    return a + b;
}

let numeros1 = [4, 7];
sumar(...numeros1); // 11

/* Copia de arrays y creación de arrays nuevos */
let colores1 = ["azul", "rojo", "verde"];
let colores2 = colores1; // NO ES UNA COPIA, sino que hay un único array referenciado por dos variables
let colores3 = [...colores1]; // colores3 almacena un ARRAY NUEVO, distinto del anterior
let colores4 = ["cian", ...colores1, "rosa"]; // colores4 almacenna un ARRAY NUEVO con nuevos elementos

// Modifico el primer array
colores2[0] = "amarillo";

console.log(colores1[0]); // amarillo
console.log(colores2[0]); // amarillo (mismo array)
console.log(colores3[0]); // azul (array distinto)
console.log(colores4.length); // 5
console.log(colores4); // ['cian', 'azul', 'rojo', 'verde', 'rosa']