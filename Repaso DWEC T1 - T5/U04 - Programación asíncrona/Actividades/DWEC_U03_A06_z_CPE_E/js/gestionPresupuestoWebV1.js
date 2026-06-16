// Autor: Mario Segura Abad
// Fecha: 21/11/2025

import {
    CrearGasto,
    anyadirGasto,
    borrarGasto,
    listarGastos,
    calcularTotalGastos,
    mostrarPresupuesto
} from "./gestionPresupuesto.js";

// Pintar el total de gastos
function mostrarTotal() {
    const totalDiv = document.getElementById("total-gastos");
    totalDiv.textContent = `Total de gastos: ${calcularTotalGastos()} €`;
}

// Pintar formulario de creación
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

    form.appendChild(inputDesc, inputValor, inputFecha, inputEtiquetas, boton);
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

// Pintar listado de gastos
function mostrarListado() {
    const listadoDiv = document.getElementById("listado-gastos");
    listadoDiv.innerHTML = "";

    listarGastos().forEach(gasto => {
        const gastoDiv = document.createElement("div");
        gastoDiv.textContent = `${gasto.descripcion} - ${gasto.valor} € - ${new Date(gasto.fecha).toLocaleString()} - [${gasto.etiquetas.join(",")}]`;

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

// Inicialización
crearFormulario();
mostrarListado();
mostrarTotal();