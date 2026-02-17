// Autor: Mario Segura Abad
// Fecha: 09/12/2025

let temporizador = {
    cuentaAtras() {                           // método normal: this -> temporizador
        setTimeout(() => {                    // arrow -> hereda este this (temporizador)
            console.log(`Ha terminado el temporizador de ${this.tiempo} ms.`);
        }, this.tiempo);
    }
};

temporizador.tiempo = 2000;
temporizador.cuentaAtras(); // OK -> muestra: Ha terminado el temporizador de 2000 ms.