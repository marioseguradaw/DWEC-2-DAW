// Autor: Mario Segura Abad
// Fecha: 24/03/2026


// 2.2. Funciones como valor
function sumar(a, b) {
    return a + b;
}
let suma1 = sumar(4,5); // suma1 = 9
let funcSuma = sumar; // funcSuma almacena la funcion, no el resultadao de su ejecución
funcSuma(3,4); // 7
let suma2 = funcSuma(3,6); // suma2 = 9

/* Pasadas como parámetro a otras funciones */
function sumar(a, b) {
    return a + b;
}
function restar(a, b) {
    return a - b;
}
function operar(operacion, a, b) {
    return operacion(a,b);
}

let v1 = operar(sumar, 4, 5); // v1 = 9
let v2 = operar(restar, 4, 5); // v2 = -1