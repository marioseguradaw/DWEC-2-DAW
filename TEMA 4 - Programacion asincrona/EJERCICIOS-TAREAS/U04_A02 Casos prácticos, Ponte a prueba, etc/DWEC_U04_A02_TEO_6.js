// Autor: Mario Segura Abad
// Fecha: 08/01/2026


// 2.3. Encadenamiento de promesas
function temporizador(tiempo) {
    // Devuelve una promesa
    return new Promise(function(resolver, rechazar) {
        // Se ejecuta un temporizador
        setTimeout(function() {
            // Cuando se agota el tiempo, se resuelve la promesa
            // El resultado de la ejecución es una cadena de texto
            resolver(`Temporizador de ${tiempo} ms terminado`);
        }, tiempo);
    });
}

var t1 = temporizador(3000); // 3 segundos
var t2 = temporizador(4000); // 4 segundos
var t3 = temporizador(6000); // 6 segundos

Promise.race([t1, t2, t3]).then(function(resultado) {
    // Cuando pasen 3 segundos, se mostrarán el mensaje del temporizador de 3 segundos
    // El resto de resultados se descartan
    console.log(resultado);
});