// Autor: Mario Segura Abad
// Fecha: 09/06/2026

let presupuesto = 0;
let gastos = [];
let idGasto = 0;

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
function listarGastos() {
    return gastos;
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

// Función global para filtrar los gastos segun criterios específicos
function filtrarGastos(criterios = {}) {
    return gastos.filter(gasto => {
        // Filtro: fechaDesde
        if (criterios.fechaDesde) {
            let desde = Date.parse(criterios.fechaDesde);
            if (!isNaN(desde) && gasto.fecha < desde) return false;
        }
        // Filtro: fechaHasta
        if (criterios.fechaHasta) {
            let hasta = Date.parse(criterios.fechaHasta);
            if (!isNaN(hasta) && gasto.fecha > hasta) return false;
        }
        // Filtro: valorMinimo
        if (criterios.valorMinimo !== undefined && criterios.valorMinimo !== null) {
            if (gasto.valor < criterios.valorMinimo) return false;
        }
        // Filtro: valorMaximo
        if (criterios.valorMaximo !== undefined && criterios.valorMaximo !== null) {
            if (gasto.valor > criterios.valorMaximo) return false;
        }
        // Filtro: descripcionContiene
        if (criterios.descripcionContiene) {
            if (!gasto.descripcion.includes(criterios.descripcionContiene)) return false;
        }
        // Filtro: etiquetasTiene
        if (criterios.etiquetasTiene && Array.isArray(criterios.etiquetasTiene) && criterios.etiquetasTiene.length > 0) {
            let tieneAlguna = criterios.etiquetasTiene.some(etiqueta => gasto.etiquetas.includes(etiqueta));
            if (!tieneAlguna) return false;
        }
        return true;
    });
}

// Función global para agrupar los gastos filtrados por períodos de tiempo
function agruparGastos(periodo, etiquetasTiene, fechaDesde, fechaHasta) {
    // Construimos el objeto de criterios dinámicamente según los parámetros recibidos
    let criterios = {};
    if (etiquetasTiene) criterios.etiquetasTiene = etiquetasTiene;
    if (fechaDesde) criterios.fechaDesde = fechaDesde;
    if (fechaHasta) criterios.fechaHasta = fechaHasta;

    // Obtenemos la lista de gastos que cumplen las condiciones
    let gastosFiltrados = filtrarGastos(criterios);

    // Agrupamos acumulando los valores en un objeto clave-valor
    return gastosFiltrados.reduce((acc, gasto) => {
        let claveTemporal = gasto.obtenerPeriodoAgrupacion(periodo);
        if (claveTemporal) {
            if (!acc[claveTemporal]) {
                acc[claveTemporal] = 0;
            }
            acc[claveTemporal] += gasto.valor;
        }
        return acc;
    }, {});
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
    };

    this.actualizarDescripcion = function (nuevaDescripcion) {
        this.descripcion = nuevaDescripcion;
    };

    this.actualizarFecha = function (nuevaFechaString) {
        let fechaParseada = Date.parse(nuevaFechaString);
        if (!isNaN(fechaParseada)) {
            this.fecha = fechaParseada;
        }
    };

    // Añade múltiples etiquetas evitando que se introduzcan duplicados
    this.anyadirEtiquetas = function(...nuevasEtiquetas) {
        nuevasEtiquetas.forEach(etiqueta => {
            if (typeof etiqueta === 'string' && etiqueta.trim() !== '' && !this.etiquetas.includes(etiqueta)) {
                this.etiquetas.push(etiqueta);
            }
        });
    };

    // Filtra las etiquetas existentes incluyendo todas las pasadas por parametro
    this.borrarEtiquetas = function (...etiquetasABorrar) {
        this.etiquetas = this.etiquetas.filter(e => !etiquetasABorrar.includes(e));
    };

    // Devuelve la cadena exacta con el salto de línea final requerido por el assert
    this.mostrarGastoCompleto = function() {
        let fechalocale = new Date(this.fecha).toLocaleString();
        let mensaje = `Gasto correspondiente a ${this.descripcion} con valor ${this.valor} €.\n`;
        mensaje += `Fecha: ${fechalocale}\n`;
        mensaje += `Etiquetas:`;
        this.etiquetas.forEach(et => {
            mensaje += `\n- ${et}`;
        });
        mensaje += `\n`; // Salto de línea de cierre exigido por el test
        return mensaje;
    };

    // Devuelve el periodo formateado de forma segura
    this.obtenerPeriodoAgrupacion = function (periodo) {
        let dia = new Date(this.fecha);
        let yyyy = dia.getUTCFullYear();
        let mm = String(dia.getUTCMonth() + 1).padStart(2, '0');
        let dd = String(dia.getUTCDate()).padStart(2, '0');

        if (periodo === "anyo") {
            return `${yyyy}`;
        } else if (periodo === "mes") {
            return `${yyyy}-${mm}`;
        } else if (periodo === "dia") {
            return `${yyyy}-${mm}-${dd}`;
        }
        return null;
    };
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
    CrearGasto,
    filtrarGastos,
    agruparGastos
};