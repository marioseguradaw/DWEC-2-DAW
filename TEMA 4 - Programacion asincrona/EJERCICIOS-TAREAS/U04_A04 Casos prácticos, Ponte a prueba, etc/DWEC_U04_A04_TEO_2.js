// Autor: Mario Segura Abad
// Fecha: 19/01/2026


// 4.5. Ejemplos de uso con "fetch"
async function programaPrincipal() {

    let respuesta = await fetch("https://www.miservidor.com/usuarios");
    // Primera promesa resuelta
    // 'respuesta' es un objeto de tipo 'Response'

    if (respuesta.ok) {
        // Si el código de la petición es un código de éxito,
        // devolvemos una segunda promesa con la transformación de los datos a JSON
        let datos = await respuesta.json();
        // Segunda promesa resuelta

        // ...
        // Tratamiento de los datos
        // ...
    } else {
        console.log("Error de red");
    }
}

programaPrincipal();