// Autor: Mario Segura Abad
// Fecha: 20/01/2026


// 4.5. Ejemplos de uso con "fetch"
async function programaPrincipal() {

    // Objeto que almacena los datos del usuario que se va a añadir
    let usuario1 = {
        nombre: "Inés",
        apellidos: "Martínez"
    };

    let respuesta = await fetch(
        "https://www.miservidor.com/usuarios",
    {
        // Método 'POST'
        method: "POST",
        // Cabeceras
        headers: {
            // Los datos se van a enviar en formato JSON
            'Content-Type': 'application/json;charset=utf-8'
        },
        // Datos convertidos a formato JSON
        body: JSON.stringify(usuario1)
    });
    // Primera promesa resuelta
    // 'respuesta' es un objeto de tipo 'Response'

    if (respuesta.ok) {
        console.log("Petición POST realizada con éxito.");
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