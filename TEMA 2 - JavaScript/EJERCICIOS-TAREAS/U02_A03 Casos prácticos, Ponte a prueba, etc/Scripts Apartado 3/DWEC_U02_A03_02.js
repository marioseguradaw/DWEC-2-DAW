// Autor: Mario Segura Abad
// Fecha: 07/10/2025


// Creamos un objeto llamado 'objeto1' con tres propiedades (clave: valor)
let objeto1 = {
    pA: "valorA",
    pB: "valorB",
    pC: "valorC"
};


// --------------------------------------------
// DESESTRUCTURACIÓN DE OBJETOS
// --------------------------------------------

// En los objetos, las variables se asocian por **nombre de propiedad**, no por posición.
// Es decir, las variables pA, pB y pC tomarán los valores de las propiedades con el mismo nombre.
let {pA, pB, pC} = objeto1;

// Mostramos los valores extraídos:
console.log(pA); // valorA -> valor de la propiedad "pA"
console.log(pB); // valorB -> valor de la propiedad "pB"
console.log(pC); // valorC -> valor de la propiedad "pC"


// -------------------------------------------
// OPERADOR REST (...) CON OBJETOS
// -------------------------------------------

// Declaramos una variable 'resto' que usaremos más abajo
let resto;

// IMPORTANTE: En este punto, la variable 'pA' ya ha sido declarada anteriormente.
// Si intentáramos usar 'let {pA, ...resto} = objeto1;' otra vez, daría error
// porque estaríamos redeclarando 'pA' en el mismo ámbito.

// Para evitar ese error, usamos una **asignación entre paréntesis**, sin 'let'.
// Esto indica que no estamos declarando nuevas variables, sino reasignando valores existentes.
({pA, ...resto} = objeto1); // Utilizar el operador rest: 'resto' almacenará un objeto

// En esta línea:
// - 'pA' toma el valor "valorA"
// - 'resto' recibe un **nuevo objeto** con las propiedades restantes del original
//   (en este caso, pB y pC)
console.log(pA); // valorA
console.log(resto); // {pB: "valorB", pC: "valorC"}