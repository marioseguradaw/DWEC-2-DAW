// Autor: Mario Segura Abad
// Fecha: 19/01/2026


// 4.5. Ejemplos de uso con "fetch"
fetch("https://www.miservidor.com/usuarios")
    .then(function(respuesta) {
        // Primera promesa resuelta
        // 'respuesta' es un objeto de tipo 'Response'

        if (respuesta.ok) {
            // Si el código de la petición es un código de éxito,
            // devolvemos una segunda promesa con la transformación de los datos a JSON
            return respuesta.json();
        } else {
            // En caso contrario, se genera un error
            throw("Ha habido un error");
        }
    }).then(function(datos) {
        // Procesamiento de la segunda promesa

        // ...
        // Tratamiento de los datos
        // ...
    }).catch(function(error) {
        console.log(`Error: ${error.message}`);
    });