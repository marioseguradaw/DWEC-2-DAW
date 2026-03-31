// Autor: Mario Segura Abad
// Fecha: 31/03/2026


// 3.1. Objetos: principios básicos
let coche = {
    color: "rojo",
    marca: "seat",
    arrancar: function() {
        console.log("Arrancando");
    }
}

console.log( coche.color ); // rojo
console.log( coche.marca ); // rojo
coche.arrancar(); // Arrancando