// Autor: Mario Segura Abad
// Fecha: 07/10/2025


// Creamos un array llamado array1 con tres valores tipo string
let array1 = ["valorA", "valorB", "valorC"];


// ------------------------------
// DESESTRUCTURACIÓN DE ARRAYS
// ------------------------------

// En los arrays, los valores se extraen según su posición (índice 0, 1, 2...)
// Aquí se están creando tres variables: a, b y c
// Cada una tomará el valor correspondiente del array en orden.
let [a, b, c] = array1;

// Mostramos en consola el contenido de las variables:
console.log(a); // valorA -> primer elemento del array
console.log(b); // valorB -> segundo elemento del array
console.log(c); // valorC -> tercer elemento del array


// ------------------------------
// IGNORAR ELEMENTOS DEL ARRAY
// ------------------------------

// Podemos "saltar" posiciones usando comas sin asignar variable.
// En este caso:
// d toma el primer valor del array ("valorA")
// se ignora el segundo valor (por la coma sin variable)
// e toma el tercer valor ("valorC")
let [d, , e] = array1;

console.log(d); // valorA -> primer elemento
console.log(e); // valorC -> tercer elemento (hemos ignorado el segundo)


// ------------------------------
// OPERADOR REST (...)
// ------------------------------

// El operador rest (...) agrupa los elementos restantes en un nuevo array.
// f toma el primer valor ("valorA")
// g toma el resto de los elementos ["valorB", "valorC"]
let [f, ...g] = array1;

console.log(f); // valorA -> primer elemento
console.log(g); // ["valorB", "valorC"] -> el resto del array empaquetado