// Autor: Mario Segura Abad
// Fecha: 18/12/2025


// 2.2. Creación de promesas
function temporizador(tiempo) {
    // Devuelve una promesa
    return new Promise(function(resolver, rechazar) {
        // Se ejecuta un temporizador
        setTimeout(function() {
            // Cuando se agota el tiempo se resuelve la promesa
            // El resultado de la ejecución es una cadena de texto
            resolver(`Temporizador de ${tiempo} ms terminado`);
        }, tiempo);
    });
}

// Se lanzan dos promesas
let t1 = temporizador(4000);
let t2 = temporizador(6000);

t1.then((resultado) => {
    // Este mensaje se muestra cuando se resuelva la primera promesa
    // Es decir, 4 segundos después
    console.log(resultado);
});

t2.then((resultado) => {
    // Este mensaje se muestra cuando se resuelva la primera promesa
    // Es decir, 6 segundos después
    console.log(resultado);
});

// El código que viene a continuación se ejecuta inmediatamente después de lanzar las promesas
// Pero no espera a que las promesas se resuelvan
console.log("Este mensaje se muestra antes que los mensajes de los temporizadores");