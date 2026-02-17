// Autor: Mario Segura Abad
// Fecha: 16/01/2026


// 3.2. Tratamiento de errores con async/await
async function programaPrincipal() {
    try {
        let a = await miFuncionAsincrona();
    } catch (error) {
        // Procesamiento del error si la promesa que devuelve 'miFuncionAsincrona' se rechaza
    }
}