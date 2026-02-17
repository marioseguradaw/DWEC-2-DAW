// Autor: Mario Segura Abad
// Fecha: 01/10/2025

let nombre1 = "Pedro"; // Variable global, accesible desde cualquier parte
let nombre2 = "Pablo"; // Variable global, accesible desde cualquier parte

function nombres() {
  let nombre3 = "Juan"; // Variable local, solo existe dentro de la propia función
  let nombre2 = "Jorge"; // Variable local con el mismo nombre que la global 'nombre2'
                         // Esta "oculta" (enmascara) a la global dentro de la función

  console.log(nombre1); // Pedro
                        // La función no encuentra 'nombre1' dentro, así que busca en el ámbito
                        // global

  console.log(nombre2); // Jorge
                        // Aquí accede a la variable local 'nombre2'

  console.log(nombre3); // Juan
                        // Es una variable local de la función, solo existe aquí dentro
}

// --- Fuera de la función ---

console.log(nombre1); // Pedro
// Accede a la variable global.

console.log(nombre2); // Pablo
// Accede a la variable global, ya que fuera de la función no existe el 'nombre2' local.

console.log(nombre3); // ERROR: ReferenceError
// Aquí 'nombre3' no existe porque fue declarada como local dentro de la función.
// Solo se podía usar dentro de 'nombres()'.