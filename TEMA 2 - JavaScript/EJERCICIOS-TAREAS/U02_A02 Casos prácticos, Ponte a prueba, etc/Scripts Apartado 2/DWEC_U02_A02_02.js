// Autor: Mario Segura Abad
// Fecha: 01/10/2025

// Definimos una función 'confirmar' que recibe tres parámetros:
// 1. 'pregunta' --> el mensaje que se mostrará en la ventana de confirmación.
// 2. 'si' --> una función callback que se ejecutará si el usuario pulsa "Aceptar".
// 3. 'no' --> una función callback que se ejecutará si el usuario pulsa "Cancelar".
function confirmar(pregunta, si, no) {
    if (confirm(pregunta)) // Se abre un cuadro de confirmación en el navegad
	    si(); // Se ejecuta la función de callback pasada en el parámetro 'si'
    else
	    no(); // Se ejecuta la función de callback pasada en el parámetro 'no'
}

// Esta es la función callback de ejemplo.
// Se ejecutará si el usuario pulsa "Aceptar".
function aceptar() {
    console.log("Has respondido que sí");
}

// Esta es otra función callback.
// Se ejecutará si el usuario pulsa "Cancelar".
function cancelar() {
    console.log("Has respondido que no");
}

// Se pasan las funciones 'aceptar' y 'cancelar' como parámetros
// IMPORTANTE: se pasan los nombres de las funciones,
// no el resultado de su ejecución
// (Es decir, se pasa 'aceptar', no 'aceptar()'
confirmar("¿Sabes qué es un callback?", aceptar, cancelar);

// Si queremos hacer otro tipo de procesamiento podemos pasar otro callback a 'confirmar'.
// En este caso, definimos 'aceptar2' para mostrar un alert en lugar de un console.log().
function aceptar2() {
    alert("Has respondido que sí");
}

// Volvemos a llamar a 'confirmar', pero ahora la función "sí" es distinta.
confirmar("¿Sabes qué es un callback?", aceptar2, cancelar);