// Autor: Mario Segura Abad
// Fecha: 07/06/2026

let presupuesto = 0;
let gastos = [];
let idGasto = 0;

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

// Devuelve el array global de gastos
function anyadirGasto(gasto) {
    gasto.id = idGasto++;
    gastos.push(gasto);
    return gastos.length;
}

// Reasigna el array global filtrando el ID que queremos eliminar
function borrarGasto(id) {
    gastos = gastos.filter(g => g.id !== id);
}

// Calcula la suma dinámica de los valores actuales en el array global
function calcularTotalGastos() {
    return gastos.reduce((total, g) => total + g.valor, 0);
}

// Resta los gastos totales al presupuesto configurado
function calcularBalance() {
    return presupuesto - calcularTotalGastos();
}

// Constructor con operador rest (...) para capturar todas las etiquetas enviadas de forma individual
function CrearGasto(descripcion, valor, fecha, ...etiquetas) {
    // Atributos
    this.descripcion = descripcion;
    this.valor = (typeof(valor) === "number" && valor >= 0) ? valor : 0;

    if (fecha) {
        let parsed = Date.parse(fecha);
        this.fecha = !isNaN(parsed) ? parsed : new Date().getTime();
    } else {
        this.fecha = new Date().getTime();
    }

    // Almacenamos las etiquetas limpiando posibles valores vacíos
    this.etiquetas = etiquetas.filter(e => typeof e === 'string' && e.trim() !== '');

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
