// Autor: Mario Segura Abad
// Fecha: 03/06/2026


// 6.3. Manejo de errores
try {
    // Acceso a una propiedad de una variable que no existe
    console.log(hola.noexiste);
} catch (error) { // El parámetro puede tener cualquier nombre, no tiene por qué ser 'error'
    console.log(error.name); // ReferenceError
    console.log(error.message); // hola is not defined
}

/* Errores personalizados */
try {
    let a = "valornovalido";

    if (a == "valornovalido") {
        // Generamos un error con un mensaje personalizado
        throw new Error("a no puede tener ese valor");
    }
} catch (err) {
    console.log(err.name); // Error
    console.log(err.message); // a no puede tener ese valor
}

/* Utilizando el bloque finally */
try {
    // Apertura de conexión
    // Procesamiento de datos
} catch (err) {
    // Captura de errores
} finally {
    // Cierre de conexión
    // Este bloque se ejecuta siempre, tanto si hay error como si no
}