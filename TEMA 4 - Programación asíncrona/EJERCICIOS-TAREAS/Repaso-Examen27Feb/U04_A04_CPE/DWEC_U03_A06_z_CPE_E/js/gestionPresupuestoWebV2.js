// Autor: Mario Segura Abad
// Fecha: 03/12/2025

import {
    CrearGasto,
    anyadirGasto,
    borrarGasto,
    listarGastos,
    calcularTotalGastos,
    sobrescribirGastos
} from "./gestionPresupuesto.js";

const STORAGE_KEY = "misGastos";

// Mostrar total
function mostrarTotal() {
    const totalDiv = document.getElementById("total-gastos");
    totalDiv.textContent = `Total de gastos: ${calcularTotalGastos()} €`;
}

// Mostrar listado
function mostrarListado() {
    const listadoDiv = document.getElementById("listado-gastos");
    listadoDiv.innerHTML = "";

    listarGastos().forEach(gasto => {
        const gastoDiv = document.createElement("div");
        gastoDiv.textContent = `${gasto.descripcion} - ${gasto.valor} € - ${new Date(gasto.fecha).toLocaleDateString()} - [${gasto.etiquetas.join(", ")}]`;

        const botonBorrar = document.createElement("button");
        botonBorrar.textContent = "Borrar";
        botonBorrar.addEventListener("click", () => {
            if(confirm("¿Seguro que quieres borrar este gasto?")) {
                borrarGasto(gasto.id);
                mostrarListado();
                mostrarTotal();
            }
        });

        gastoDiv.appendChild(botonBorrar);
        listadoDiv.appendChild(gastoDiv);
    });
}

// Crear formulario
function crearFormulario() {
    const formDiv = document.getElementById("formulario-gasto");
    const form = document.createElement("form");

    const inputDesc = document.createElement("input");
    inputDesc.placeholder = "Descripción";
    inputDesc.required = true;

    const inputValor = document.createElement("input");
    inputValor.type = "number";
    inputValor.placeholder = "Valor";
    inputValor.required = true;

    const inputFecha = document.createElement("input");
    inputFecha.type = "date";

    const inputEtiquetas = document.createElement("input");
    inputEtiquetas.placeholder = "Etiquetas (separadas por coma)";

    const boton = document.createElement("button");
    boton.type = "submit";
    boton.textContent = "Añadir gasto";

    form.appendChild(inputDesc);
    form.appendChild(inputValor);
    form.appendChild(inputFecha);
    form.appendChild(inputEtiquetas);
    form.appendChild(boton);

    formDiv.appendChild(form);

    form.addEventListener("submit", e => {
        e.preventDefault();

        const gasto = new CrearGasto(
            inputDesc.value,
            parseFloat(inputValor.value),
            inputFecha.value,
            ...inputEtiquetas.value.split(",").map(etiqueta => etiqueta.trim()).filter(etiqueta => etiqueta)
        );

        anyadirGasto(gasto);
        mostrarListado();
        mostrarTotal();

        form.reset();
    });
}

// Guardar en LocalStorage
function guardarGastos() {
    const gastos = listarGastos();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(gastos));
    alert("Gastos guardados en almacenamiento local.");
}

// Recuperar de LocalStorage
function recuperarGastos() {
    const datos = localStorage.getItem(STORAGE_KEY);
    if(datos) {
        const gastosPlano = JSON.parse(datos);

        // Reconstruir objetos gasto
        const nuevosGastos = gastosPlano.map(g =>
            new CrearGasto(g.descripcion, g.valor, g.fecha, ...g.etiquetas)
        );

        sobrescribirGastos(nuevosGastos);

        mostrarListado();
        mostrarTotal();
        alert("Gastos recuperados desde almacenamiento local.");
    } else {
        alert("No hay datos guardados.");
    }
}

// Inicialización
crearFormulario();
mostrarListado();
mostrarTotal();

document.getElementById("guardar-gastos").addEventListener("click", guardarGastos);
document.getElementById("recuperar-gastos").addEventListener("click", recuperarGastos);