// Autor: Mario Segura Abad
// Fecha: 24/03/2026


// 2.3. Funciones anónimas
let sumar = function(a, b) {
    return a + b;
}

let v1 = sumar(4,5); // 9

/* Función con nombre */
let sumar2 = function sumar(a, b) {
    return a + b;
}

let v2 = sumar(4, 5); // 9

/* Callbacks */
function confirmar(pregunta, si, no) {
    if (confirm(pregunta))
        si();
    else
        no();
}
// En este caso, las funciones de callback se crean in situ como funciones anónimas
confirmar("¿Sabes qué es un callback?",
    function() {
        console.log("Has respondido que sí");
    }, function() {
        console.log("Has respondido que no");
    }
)