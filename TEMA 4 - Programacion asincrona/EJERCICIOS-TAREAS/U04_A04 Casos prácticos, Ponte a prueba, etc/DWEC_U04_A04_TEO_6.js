// Autor: Mario Segura Abad
// Fecha: 20/01/2026


// 4.7. Abortar peticiones

// Controlador para abortar
const controlador = new AbortController()

fetch("https://misitio.com/usuarios",
{
    // Se pasa la propiedad 'signal' del controlador
    // a la opción 'signal' de 'fetch'
    signal: controlador.signal
})
.then(response => {
    // Tratar respuesta
})
.catch(error => {
    // Si la petición se aborta, se genera un error 'AbortError'
    if (error.name === "AbortError") {
        console.log("Petición cancelada");
    }
});

// Abortar la petición
controlador.abort();

// Petición cancelada