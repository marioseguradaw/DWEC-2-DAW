// Autor: Mario Segura Abad
// Fecha: 25/09/2025

// =============================
// Ejemplo de var, let y const
// =============================

// var permite redeclarar (aunque no es recomendable)
var a = 5; 
var a = "hola"; // permitido

// let NO permite redeclarar en el mismo ámbito
let b = 6;
// let b = "hola"; (esto daría error)

// Función de prueba
function funcion1() {
    console.log("a:", a); // "hola"
    console.log("b:", b); // 6

    var c = "hola"; // variable local a la función

    // let → bloque
    for (let d = 0; d < 5; d++) {
        console.log("d:", d); // solo dentro del for
    }
    // console.log(d); // (no existe fuera del for)

    // var → función
    for (var d1 = 0; d1 < 5; d1++) {
        console.log("d1:", d1);
    }
    console.log("d1 final:", d1); // 5 (var sobrevive fuera del for)

    if (true) {
        var e = 52;  // visible en toda la función
        let f = 60;  // solo dentro del if
        console.log("f dentro del if:", f); // se usa dentro del if
    }

    console.log("e:", e); // 52
    // console.log(f); // (no existe fuera del if)
}

// console.log(c); // (solo existe en funcion1)

// const no se puede reasignar
const g = 52;
// g = "hola"; (esto daría error)

// Pero sí se pueden modificar objetos/arrays
const h = ["a", "b"];
h[0] = "d";
console.log("Array h modificado:", h); // ["d","b"]

// Ejecutamos la función
funcion1();

// Prueba de Autoría
console.log("Autor: Mario Segura Abad");
console.log("Fecha de realización: 25/09/2025");