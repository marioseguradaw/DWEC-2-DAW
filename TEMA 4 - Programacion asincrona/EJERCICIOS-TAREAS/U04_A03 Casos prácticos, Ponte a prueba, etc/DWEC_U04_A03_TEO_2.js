// Autor: Mario Segura Abad
// Fecha: 16/01/2026


// 3.1. Async y await
async function programaPrincipal() {
    // La función 'temporizador' devuelve una promesa
    function temporizador(tiempo) {
        return new Promise(function (resolver, rechazar) {
            setTimeout(function () {
                resolver(`Temporizador de ${tiempo} ms terminado`);
            }, tiempo);
        });
    }

    // Se puede utilizar 'await' porque estamos dentro de la función 'programaPrincipal',
    // que está definida como 'async'
    let a = await temporizador(3000);
    // El programa espera a que se resuelva la promesa y se obtenga el resultado


    // La variable 'a' almacena el resultado, NO LA PROMESA
    console.log(a); // Temporizador de 3000 ms terminado
}

// Se ejecuta el programa principal
programaPrincipal();
// El programa espera 3 segundos...
// Y a los 3 segundos aparece el mensaje