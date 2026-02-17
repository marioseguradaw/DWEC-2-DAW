// Autor: Mario Segura Abad
// Fecha: 11/11/2025


// Objeto 'PositionOptions'
let opciones = {
    enableHighAccuracy: true, // Si se desea obtener precisión alta
    timeout: 5000, // Tiempo máximo (en ms) que se debe esperar hasta que el navegador proporcione los datos
    maximumAge: 5000  // Tiempo máximo
};

// Función que se ejecutará si la petición de geolocalización tiene éxito
function posicionObtenida(posicion) {
    // 'posicion' es un objeto de tipo 'PositionOptions'

    console.log(`Posición obtenida en la fecha: ${new Date(posicion.timestamp)}`);
    console.log(`Latitud: ${posicion.coords.latitude} grados.`);
    console.log(`Longitud: ${posicion.coords.longitude} grados.`);
    console.log(`Altitud: ${posicion.coords.altitude} metros.`);
    console.log(`Precisión: ${posicion.coords.accuracy} metros.`);
    console.log(`Precisión de la altitud: ${posicion.coords.altitudeAccuracy} metros.`);
    console.log(`Tu dispositivo apunta a un ángulo de ${posicion.coords.heading} grados desde el Norte.`);
    console.log(`Velocidad: ${posicion.coords.speed} m/s.`);
};

function posicionError(error) {
    // El código de error es:
    // 1 - Permiso denegado (el usuario no autoriza el uso de la ubicación)
    // 2 - Posición no disponible
    // 3 - Tiempo de espera agotado

    console.log(`Error con código ${error.code}`);
    console.log(`Mensaje de error: ${error.message}`);
};

// Llamada a la función de localización
navigator.geolocation.getCurrentPosition(posicionObtenida, posicionError, opciones);