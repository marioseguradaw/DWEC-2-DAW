// Autor: Mario Segura Abad
// Fecha: 11/12/2025


// 2.1. Introducción

// Lanzamiento del proceso asíncrono
// IMPORTANTE: 'a' almacena una promesa, no el resultado del proceso.
let a = funcionQueDevuelveUnaPromesa(parametros);

// Procesamiento de los resultados
a.then(
    function(resultado) {
        // Aqui procesamos el resultado (si no hay error)
    },
    function(error) {
        // Aquí procesamos el error (si se produce)
    }
);

// Este código se ejecuta inmediatamente después de lanzar la promesa,
// antes de procesar su resultado o su error
console.log("Me muestro antes de que se resuelva la promesa");

// Lanzamiento del proceso asíncrono
// IMPORTANTE: 'a' almacena una promesa, no el resultado del proceso.
let b = funcionQueDevuelveUnaPromesa(parametros);

// Procesamiento de los resultados
b.then(
    function(resultado) {
        // Aquí procesamos el resultado (si no hay error)
    }
) .catch(
    function(error) {
        // Aquí procesamos el error (si se produce)
});

// Lanzamiento del proceso asíncrono
// IMPORTANTE: 'a' almacena una promesa, no el resultado del proceso
let c = funcionQueDevuelveUnaPromesa(parametros);

// Procesamiento de los resultados
c
    .finally(
        function () {
            // Este mensaje se muestra siempre, antes del resultado o error
            console.log('Primer finally');
        })
    .then(
        function(resultado) {
            // Aquí procesamos el resultado (si no hay error)
        }
    )
    .finally(
        function() {
            // Este mensaje se muestra siempre, después del resultado (si lo hay)
            // o antes del error (si lo hay)
            console.log('Segundo finally');
        })
    .catch(
        function(error) {
            // Aquí procesamos el error (si se produce)
        })
    .finally(
        function() {
            // Este mensaje se muestra siempre, después del resultado o error
            console.log('Tercer finally');
        });