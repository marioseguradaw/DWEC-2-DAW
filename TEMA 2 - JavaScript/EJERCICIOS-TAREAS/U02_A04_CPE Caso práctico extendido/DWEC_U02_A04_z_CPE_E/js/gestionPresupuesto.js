// Autor: Mario Segura Abad
// Fecha: 22/10/2025


// Variables globales
let presupuesto = 0;
let gastos = [];
let idGasto = 0;

// Funciones para Presupuesto
function actualizarPresupuesto(valor) {
    if(typeof valor === "number" && valor >= 0) {
        presupuesto = valor;
        return presupuesto;
    }
    console.error("Valor inválido.");
    return -1;
}

function mostrarPresupuesto() {
    return `Tu presupuesto actual es de ${presupuesto} €`;
}

// Función constructora de gasto
function CrearGasto(descripcion, valor = 0, fechaString, ...etiquetas) {
    if(typeof valor !== "number" || valor < 0) valor = 0;

    let fecha = Date.parse(fechaString);
    fecha = isNaN(fecha) ? Date.now() : fecha;

    const gasto = {
        descripcion,
        valor,
        fecha,
        etiquetas: [],
        mostrarGasto() {
            return `Gasto correspondiente a ${this.descripcion} con valor ${this.valor} €`;
        },
        actualizarDescripcion(nuevaDescripcion) {
            this.descripcion = nuevaDescripcion;
        },

        actualizarValor(nuevoValor) {
            if(typeof nuevoValor === "number" && nuevoValor >= 0) {
                this.valor = nuevoValor;
            }
        },
        actualizarFecha(nuevaFechaString) {
            const nuevaFecha = Date.parse(nuevaFechaString);
            if(!isNaN(nuevaFecha)) {
                this.fecha = nuevaFecha;
            }
        },
        anyadirEtiquetas(...nuevasEtiquetas) {
            nuevasEtiquetas.forEach(etiqueta => {
                if(!this.etiquetas.includes(etiqueta)) {
                    this.etiquetas.push(etiqueta); // Si no existía la etiqueta en cuestión en el array de etiquetas, se añade al array, ".push(etiqueta)"
                }
            });
        },
        borrarEtiquetas(...etiquetasAEliminar) {
            this.etiquetas = this.etiquetas.filter(etiqueta => !etiquetasAEliminar.includes(etiqueta)); // El "filter" conservará aquellas etiquetas que NO estén en "etiquetasAElimminar" y eliminará las que sí lo estén
        },
        mostrarGastoCompleto() {
            const fechaLocal = new Date(this.fecha).toLocaleString();
            const etiquetasTexto = this.etiquetas.map(etiqueta => `- ${etiqueta}`).join("\n");
            return `Gasto correspondiente a ${this.descripcion} con valor ${this.valor} €. \nFecha: ${fechaLocal}\nEtiquetas:\n${etiquetasTexto}`;
        }
    };

    gasto.anyadirEtiquetas(...etiquetas);
    return gasto;
}

// Funciones nuevas
function listarGastos() {
    return gastos;
}

function anyadirGasto(gasto) {
    gasto.id = idGasto;
    idGasto++;
    gastos.push(gasto); // "gasto.id = idGasto" se le asigna un identificador único al gasto, si eso se cumple el contador global incrementa y añade el gasto al array de gastos
}

function borrarGasto(id) {
    gastos = gastos.filter(gasto => gasto.id !== id); // Conserva sólo aquellos gastos cuyo id sea diferente al que se quiere eliminar
}

function calcularTotalGastos() {
    return gastos.reduce((total, gasto) => total + gasto.valor, 0); // Gracias a ".reduce()" recorre el array y acumula un resultado, el acumulador empieza en 0
}

function calcularBalance() {
    return presupuesto - calcularTotalGastos();
}

// Exportación de funciones
export   {
    mostrarPresupuesto,
    actualizarPresupuesto,
    CrearGasto,
    listarGastos,
    anyadirGasto,
    borrarGasto,
    calcularTotalGastos,
    calcularBalance
};