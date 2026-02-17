// Autor: Mario Segura Abad
// Fecha: 07/10/2025


// Creamos un array inicial con tres elementos
let array1 = ['a', 'b', 'c'];


// ---------------------------------------------
// MÉTODOS push() y pop()
// ---------------------------------------------


// push() -> Añade un elemento al final del array
array1.push("d"); // array1 = [ 'a', 'b', 'c', 'd' ]

// pop() -> Elimina el último elemento del array
array1.pop(); // array1 = [ 'a', 'b', 'c' ]
// Devuelve el elemento eliminado ("d")


// ---------------------------------------------
// MÉTODOS shift() y unshift()
// ---------------------------------------------


// shift() -> Elimina el PRIMER elemento del array
// Devuelve el elemento eliminado ("a")
array1.shift(); // array1 = [ 'b', 'c' ] (la función devuelve 'a')

// unshift() -> Añade uno o varios elementos al INICIO del array
array1.unshift("a"); // array1 = [ 'a', 'b', 'c' ]


// ----------------------------------------------
// MÉTODO splice()
// ----------------------------------------------


// Creamos un nuevo array
let array2 = [10, 11, 12, 13, 14];

// splice(posicionInicial, númeroDeElementosAEliminar)
// Elimina 2 elementos a partir de la posición 1
array2.splice(1, 2); // array2 = [ 10, 13, 14 ] (extrae 2 elementos a partir de la posición 1)
// Elimina los elementos [11, 12]
// array2 queda como [10, 13, 14]
// splice() modifica el array original


// ----------------------------------------------
// MÉTODO slice()
// ----------------------------------------------


// Creamos otro array
let array3 = [1, 2, 3, 4, 5];

// slice(inicio, fin) -> Extrae una "copia" de una parte del array
// No modifica el array original
let array4 = array3.slice(1, 4);
// Extrae los elementos desde el índice 1 hasta el 4 (sin incluir el 4)
// array4 = [2, 3, 4]
// array3 sigue siendo [1, 2, 3, 4, 5]


// ----------------------------------------------
// MÉTODO concat()
// ----------------------------------------------


// Creamos dos arrays
let array5 = [1, 2];
let array6 = [8, 9];

// concat() -> Combina arrays (o valores) en un nuevo array
let array7 = array5.concat(array6);
// array7 = [1, 2, 8, 9]
// Los arrays originales (array5 y array6) no se modifican


// -----------------------------------------------
// MÉTODOS indexOf() e includes()
// -----------------------------------------------


// indexOf(valor) -> Devuelve el índice del valor buscado (o -1 si no existe)
array7.indexOf(8); // 2 -> el número 8 está en la posición 2

// includes(valor) -> Devuelve true si el valor existe en el array, false si no
array7.includes(1); // true -> el 1 está presente
array7.includes(3); // false -> el 3 no está presente