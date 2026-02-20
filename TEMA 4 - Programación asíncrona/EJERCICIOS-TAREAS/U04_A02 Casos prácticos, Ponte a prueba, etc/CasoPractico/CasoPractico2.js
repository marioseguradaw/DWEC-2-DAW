// Autor: Mario Segura Abad
// Fecha: 08/01/2026

function temporizador(nombre, tiempo, provocarError = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(provocarError) {
                reject(`Error en ${nombre}`);
            } else {
                resolve(`${nombre} finalizado`);
            }
        },tiempo);
    });
}

// Encadenamiento de promesas
temporizador("Temporizador 1", 1000)
    .then(mensaje => {
        console.log(mensaje);
        return temporizador("Temporizador 2", 1500);
    })

    .then(mensaje => {
        console.log(mensaje);
        return temporizador("Temporizador 3", 2000);
    })

    .then(mensaje => {
        console.log(mensaje);
    })

    .catch(error => {
        console.error(error);
    })

    .finally(() => {
        console.log("Proceso finalizado (con o sin errores)");
    });