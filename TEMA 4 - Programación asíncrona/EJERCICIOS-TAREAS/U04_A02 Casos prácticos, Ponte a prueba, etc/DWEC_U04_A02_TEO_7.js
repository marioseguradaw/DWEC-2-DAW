// Autor: Mario Segura Abad
// Fecha: 08/01/2026


// 2.4. Tratamiento de errores con promesas
try {
    setTimeout(function() {
        throw new Error("Error muy grave");
    }, 2000);
} catch (error) {
    // El error no se captura en este bloque
    console.log(error.message);
}

// En la consola aparece el siguiente mensaje:
// Uncaught Error: Error muy grave

function temporizador(tiempo) {
    return new Promise(function(resolver, rechazar) {
        setTimeout(function() {
            resolver(`Temporizador de ${tiempo} ms terminado`);
        }, tiempo);
    });
}

let t1 = temporizador(4000);

t1.then((resultado) => {
    // Lanzamos un error
    throw new Error("Error personalizado");

    // Este código no se llega a ejecutar
    console.log(resultado);
}).catch((error) => {
    // Se trata el error generado
    console.log(`Se ha producido un error con mensaje ${error.message}`);
});