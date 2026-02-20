// Autor: Mario Segura Abad
// Fecha: 18/01/2026

function temporizador(tiempo) {
    return new Promise((resolver, rechazar) => {
        setTimeout(() => {
            resolver(`Temporizador de ${tiempo} ms terminado`);
        }, tiempo);
    });
}

async function ejecutarTemporizadores() {
    // Se lanzan en paralelo
    const t1 = temporizador(1000);
    const t2 = temporizador(2000);
    const t3 = temporizador(3000);

    // Espera a que finalicen todos
    const resultados = await Promise.all([t1, t2, t3]);

    // Mostrar resultado
    resultados.forEach(resultado => {
        console.log(resultado);
    });
}

// Ejecución
ejecutarTemporizadores();