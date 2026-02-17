// Autor: Mario Segura Abad
// Fecha: 08/01/2026

function temporizador(tiempo) {
    return new Promise(function(resolver, rechazar) {
        setTimeout(function() {
            resolver(`Temporizador de ${tiempo} ms terminado`);
        },tiempo);
    });
}

temporizador(3000)
    .then(resultado => {
        console.log(`El valor que devuelve el temporizador es: ${resultado}.`);
    });