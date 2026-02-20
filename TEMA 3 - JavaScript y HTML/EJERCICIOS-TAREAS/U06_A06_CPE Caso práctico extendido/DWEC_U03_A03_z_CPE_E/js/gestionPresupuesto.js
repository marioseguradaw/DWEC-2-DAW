// Autor: Mario Segura Abad
// Fecha: 05/11/2025


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
function CrearGasto(descripcion, valor = 0, fechaStr, ...etiquetas) {
  let fecha = Date.parse(fechaStr);
  fecha = isNaN(fecha) ? Date.now() : fecha;

  const gasto = {
    descripcion,
    valor: typeof valor === "number" && valor >= 0 ? valor : 0,
    fecha,
    etiquetas: [],

    actualizarDescripcion(nuevaDescripcion) {
      this.descripcion = nuevaDescripcion;
    },

    actualizarValor(nuevoValor) {
      if (typeof nuevoValor === "number" && nuevoValor >= 0) {
        this.valor = nuevoValor;
      }
    },

    actualizarFecha(nuevaFechaStr) {
      let nuevaFecha = Date.parse(nuevaFechaStr);
      if (!isNaN(nuevaFecha)) {
        this.fecha = nuevaFecha;
      }
    },

    anyadirEtiquetas(...nuevasEtiquetas) {
      nuevasEtiquetas.forEach(etiqueta => {
        if (!this.etiquetas.includes(etiqueta)) {
          this.etiquetas.push(etiqueta);
        }
      });
    },

    borrarEtiquetas(...etiquetasAEliminar) {
      this.etiquetas = this.etiquetas.filter(
        etiqueta => !etiquetasAEliminar.includes(etiqueta)
      );
    },

    mostrarGasto() {
      return `Gasto correspondiente a ${this.descripcion} con valor ${this.valor} €`;
    },

    mostrarGastoCompleto() {
      const fechaLocal = new Date(this.fecha).toLocaleString();
      const etiquetasTexto = this.etiquetas.map(etiqueta => `- ${etiqueta}`).join("\n");
      return `Gasto correspondiente a ${this.descripcion} con valor ${this.valor} €.\nFecha: ${fechaLocal}\nEtiquetas:\n${etiquetasTexto}`;
    },

    obtenerPeriodoAgrupacion(periodo) {
      const fechaObj = new Date(this.fecha);
      const año = fechaObj.getFullYear();
      const mes = String(fechaObj.getMonth() + 1).padStart(2, "0");
      const dia = String(fechaObj.getDate()).padStart(2, "0");

      if (periodo === "dia") return `${año}-${mes}-${dia}`;
      if (periodo === "mes") return `${año}-${mes}`;
      if (periodo === "anyo") return `${año}`;
      return null;
    }
  };

  // Ahora que gasto.anyadirEtiquetas existe, puedes llamarla
  gasto.anyadirEtiquetas(...etiquetas);
  return gasto;
}

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

// Funciones nuevas
function filtrarGastos(filtros = {}) {
    return gastos.filter(gasto => {
        const fecha = gasto.fecha;
        const descripcion = gasto.descripcion.toLowerCase();
        const etiquetas = gasto.etiquetas.map(etiqueta => etiqueta.toLowerCase());

        if(filtros.fechaDesde && fecha < Date.parse(filtros.fechaDesde)) {
            return false;
        }
        if(filtros.fechaHasta && fecha > Date.parse(filtros.fechaHasta)) {
            return false;
        }
        if(filtros.valorMinimo && gasto.valor < filtros.valorMinimo) {
            return false;
        }
        if(filtros.valorMaximo && gasto.valor > filtros.valorMaximo) {
            return false;
        }
        if(filtros.descripcionContiene && !descripcion.includes(filtros.descripcionContiene.toLowerCase)) {
            return false;
        }
        if(filtros.etiquetasTiene) {
            const etiquetasFiltro = filtros.etiquetasTiene.map(etiqueta => etiqueta.toLowerCase());
            if(!etiquetas.some(et => etiquetasFiltro.includes(et))) {
                return false;
            }
        }
        return true;
    });
}

function agruparGastos(periodo = "mes", etiquetas = [], fechaDesde, fechaHasta) {
    const filtros = {};

    if(etiquetas.length > 0) {
        filtros.etiquetasTiene = etiquetas;
    }
    if(fechaDesde) {
        filtros.fechaDesde = fechaDesde;
    }
    if(fechaHasta) {
        filtros.fechaHasta = fechaHasta;
    }

    const gastosFiltrados = filtrarGastos(filtros);

    return gastosFiltrados.reduce((acumulador, gasto) => {
        const clave = gasto.obtenerPeriodoAgrupacion(periodo);
        acumulador[clave] = (acumulador[clave] || 0) + gasto.valor;
        return acumulador;
    }, {});
}

function sobrescribirGastos(nuevosGastos) {
  gastos = nuevosGastos;
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
  calcularBalance,
  filtrarGastos,
  agruparGastos,
  sobrescribirGastos
};