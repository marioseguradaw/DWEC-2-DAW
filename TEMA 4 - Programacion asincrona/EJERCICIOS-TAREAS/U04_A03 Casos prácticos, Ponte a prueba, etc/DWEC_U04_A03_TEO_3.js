// Autor: Mario Segura Abad
// Fecha: 16/01/2026


// 3.1 Async y await

// Función asíncrona
miFuncionAsincrona().then(function (a) {
    // Esta sentencia se ejecuta cuando termina 'miFuncionAsincrona()'
    // Se ejecuta DESPUES de que aparezca el texto 'Hola mundo'
    console.log(a);
});

// Esta sentencia se ejecuta inmediatamente después de la sentencia anterior
// NO ESPERA a que 'miFuncionAsincrona()' termine y devuelva un resultado
console.log("Hola mundo");

async function programaPrincipal() {
    // Llamada a una función con 'await'
    let a = await miFuncionAsincrona();

    // Esta sentencia no se ejecuta hasta que termina la sentencia anterior
    console.log(a);
}