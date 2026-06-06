// Autor: Mario Segura Abad
// Fecha: 05/06/2026

let presupuesto = 0;

// ---- NUEVAS VARIABLES GLOBALES ----
let gastos = [];
let idGasto = 1;

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

// ---- NUEVAS FUNCIONES GLOBALES DE LA LIBRERIA ----
function listarGastos() {
    return gastos;
}

// Añade un identificador al gasto, lo incrementa y lo guarda al final del array
function anyadirGasto(gasto) {
    gasto.id = idGasto;
    idGasto++;
    gastos.push(gasto);
}

// Elimina del array el gasto con el id proporcionado
function borrarGasto(id) {
    const indice = gastos.findIndex(g => g.id === id);
    if (indice !== -1) {
        gastos.splice(indice, 1);
    }
}

// Calcula la suma total acumulada de todos los gastos
function calcularTotalGastos() {
    return gastos.reduce((total, gasto) => total + gasto.valor, 0);
}

// Devuelve el presupuesto restante disponible
function calcularBalance() {
    return presupuesto - calcularTotalGastos();
}

// ---- FUNCIÓN CONSTRUCTORA EXTENDIDA ----
function CrearGasto(descripcion, valor, fecha, ...etiquetas) {
    // Atributos
    this.descripcion = descripcion;
    this.valor = (typeof(valor) === "number" && valor >= 0) ? valor : 0;

    // Control y asignacion de Fecha (Timestamps)
    if (fecha && !isNaN(Date.parse(fecha))) {
        this.fecha = Date.parse(fecha); // Guarda el timestamp válido
    } else {
        this.fecha = Date.now();
    }

    // Inicialización del listado de categorías/etiquetas
    this.etiquetas = [];

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

    // ---- NUEVOS MÉTODOS DEL OBJETO GASTO ----

    // Añade etiquetas evitando duplicados usando rest parameters
    this.anyadirEtiquetas = function (...nuevasEtiquetas) {
        nuevasEtiquetas.forEach(etiqueta => {
            if (!this.etiquetas.includes(etiqueta)) {
                this.etiquetas.push(etiqueta);
            }
        });
    };

    // Borra una o varias etiquetas si existen dentro del listado
    this.borrarEtiquetas = function (...etiquetasABorrar) {
        this.etiquetas = this.etiquetas.filter(etiqueta => !etiquetasABorrar.includes(etiqueta));
    };

    // Actualiza el timestamp si el formato string de la fecha es valido
    this.actualizarFecha = function (nuevaFecha) {
        if (nuevaFecha && !isNaN(Date.parse(nuevaFecha))) {
            this.fecha = Date.parse(nuevaFecha);
        }
    };
    
    // Devuelve la representación en texto multilínea formateado
    this.mostrarGastoCompleto = function () {
        const fechaLocalizada = new Date(this.fecha).toLocaleDateString();
        let resultadoFinal = `Gasto correspondiente a ${this.descripcion} con valor ${this.valor} €\n`;
        resultadoFinal += `Fecha: ${fechaLocalizada}`;
        resultadoFinal += `Etiquetas:`;

        this.etiquetas.forEach(etiqueta => {
            resultadoFinal += `\n${etiqueta}`;
        });

        return resultadoFinal;
    };

    // Al construir el objeto, si se pasaron etiquetas se procesan mediante el método
    if (etiquetas.length > 0) {
        this.anyadirEtiquetas(...this.etiquetas)
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
    listarGastos,
    anyadirGasto,
    borrarGasto,
    calcularTotalGastos,
    calcularBalance,
    CrearGasto
}
