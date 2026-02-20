// Autor: Mario Segura Abad
// Fecha: 05/12/2025


// 1.3. Inconvenientes de los "callbacks"
setTimeout(function() {
    console.log("Primer mensaje después de 2 segundos.");
    // Ponemos en marcha el segundo temporizador
    setTimeout(function() {
        console.log("Segundo mensaje, 3 segundos después del primero.");
        // Ponemos en marcha el tercer temporizador
        setTimeout(function() {
            console.log("Tercer mensaje, 1 segundo después del segundo.");
        }, 1000);
    }, 3000);
}, 2000);