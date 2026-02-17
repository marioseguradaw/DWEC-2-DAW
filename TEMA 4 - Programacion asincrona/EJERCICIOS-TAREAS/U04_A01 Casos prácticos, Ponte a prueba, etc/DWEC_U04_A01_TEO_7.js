// Autor: Mario Segura Abad
// Fecha: 05/12/2025


// 1.3. Inconvenientes de los "callbacks"
let usuario = {
    nombre: "Laura",
    saludarConRetardo: function() {
        setTimeout(() => {
            // Función flecha: no tiene 'this'
            // Por tanto, 'this' se coge del contexto léxico
            // (cuerpo de la función 'saludarConRetardo')
            console.log(`Hola, soy ${this.nombre}`);
        }, 2000);
    }
};

usuario.saludarConRetardo();
// Cuando pasen dos segundos se mostrará: 'Hola, soy Laura'