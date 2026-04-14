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

/* Añadir propiedades */
coche.modelo = "ibiza";
coche["combustible"] = "diesel";

/* Operador "for in" */
for (let prop in coche) {
    console.log(prop);
}

// color
// marca
// arrancar

/* Si se accede a una propiedad no existente no devuelve error, sino undefined */
let persona = {
    edad: 20,
    nombre: "David"
}

console.log( "edad" in persona); // true
console.log( "apellido" in persona); // false