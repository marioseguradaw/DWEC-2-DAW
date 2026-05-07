// Autor: Mario Segura Abad
// Fecha: 05/05/2026

let presupuesto = 0;

// TODO: Funciones adicionales

function actualizarPresupuesto(nuevoPresupuesto) {    
    if (nuevoPresupuesto >= 0) {
        presupuesto = nuevoPresupuesto;
        return presupuesto;
    } else {
        console.log("Error, número no válido. El número debe ser positivo.");
        return -1;
    }
}

function mostrarPresupuesto() {
    return `Tu presupuesto actual es de ${presupuesto} €`;
}

function CrearGasto(descripcion, valor) {
    // Atributos
    this.descripcion = descripcion;
    this.valor = (typeof(valor) === "number" && valor >= 0) ? valor : 0;

    // Métodos
    this.mostrarGasto = function () {
        return `Gasto correspondiente a ${descripcion} con valor ${valor} €`;
    };

    this.actualizarValor = function (nuevoValor) {
        this.valor = (typeof(nuevoValor) === "number" && nuevoValor >= 0) ? nuevoValor : this.valor; 
    }

    this.actualizarDescripcion = function (nuevaDescripcion) {
        this.descripcion = nuevaDescripcion;
    }

    /*if (valor >= 0) {
        this.valor = valor;
    } else {
        this.valor = 0;
    } */
}

// Exportación de funciones
export   {
    mostrarPresupuesto,
    actualizarPresupuesto,
    CrearGasto
}
