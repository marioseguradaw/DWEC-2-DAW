// Autor: Mario Segura Abad
// Fecha: 05/12/2025


// 1.3. Inconvenientes de los "callbacks"
let usuario = {
    nombre: "Laura",
    saludarConRetardo: function() {
        setTimeout(function() {
            // Función convencional: define 'this', que se ejecuta en el contexto
            // de una función anónima
            // (no tiene referencia ni implícita ni explícita al objeto sobre el que se ejecuta).
            // 'this' en este caso apunta al objeto global
            console.log(`Hola, soy ${this.nombre}`);
        }, 2000);
    }
};

usuario.saludarConRetardo();
// Cuando pasen dos segundos se mostrará: 'Hola, soy undefined'