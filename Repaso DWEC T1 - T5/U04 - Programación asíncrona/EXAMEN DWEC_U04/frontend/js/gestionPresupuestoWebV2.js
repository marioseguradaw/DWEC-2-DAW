// Autor: Mario Segura Abad
// Fecha: 03/12/2025

import {
    CrearGasto,
    anyadirGasto,
    borrarGasto,
    listarGastos,
    calcularTotalGastos,
    sobrescribirGastos,
    cargarGastos
} from "./gestionPresupuesto.js";

const STORAGE_KEY = "misGastos";
let gastos = [];
let usuarioActual = "";

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
        gastoDiv.textContent = `${gasto.descripcion} - ${gasto.valor} € - ${new Date(gasto.fecha).toLocaleDateString()}`;

        listadoDiv.appendChild(gastoDiv);

        const botonBorrar = document.createElement("button");
        botonBorrar.textContent = "Borrar";
        botonBorrar.addEventListener("click", () => {
            if(confirm("¿Seguro que quieres borrar este gasto?")) {
                borrarGastoAPI(gasto.id);
                // mostrarListado();
                // mostrarTotal();
            }
        });

        gastoDiv.appendChild(botonBorrar);

        const botonEditar = document.createElement("button");
        botonEditar.textContent = "Editar";
        botonEditar.addEventListener("click", () => {
            const nuevaDescripcion = prompt("Nueva descripción:", gasto.descripcion);
            const nuevoValor = prompt("Nuevo valor:", gasto.valor);

            actualizarGastoAPI(gasto.id, nuevaDescripcion, parseFloat(nuevoValor), gasto.fecha);
        });

        gastoDiv.appendChild(botonEditar);
    });
}

// Crear formulario
function crearFormulario() {
    const formDiv = document.getElementById("form-gasto");
    const form = document.createElement("form");

    const inputDesc = document.createElement("input");
    inputDesc.placeholder = "Descripción";
    inputDesc.required = true;

    const inputValor = document.createElement("input");
    inputValor.type = "number";
    inputValor.placeholder = "Valor";
    inputValor.required = true;
    inputValor.step = "0.01";

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

        anyadirGastoAPI(gasto);
        mostrarListado();
        mostrarTotal();

        form.reset();
    });
}

// Guardar en LocalStorage
/* function guardarGastos() {
    const gastos = listarGastos();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(gastos));
    alert("Gastos guardados en almacenamiento local.");
} */

// Recuperar de LocalStorage
/* function recuperarGastos() {
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
} */

// Funciones de la API
function cargarGastosAPI() {
    usuarioActual = document.getElementById("usuario").value.trim();

    if (!usuarioActual) {
        alert("Primero debe introducir un usuario en el formulario.");
        return;
    }

    fetch(`http://localhost:3000/${usuarioActual}`)
        .then(respuesta => respuesta.json())
        .then(datos => {
            gastos = datos;

            cargarGastos(datos);
            mostrarListado();
            mostrarTotal();
        })
        .catch(error => {
            console.error(error);
            alert("Error al cargar los gastos. Inténtelo de nuevo");
        });
}

function anyadirGastoAPI(gasto) {
    fetch(`http://localhost:3000/${usuarioActual}`,
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(gasto)
        }
    )
    .then(() => {
        cargarGastosAPI();
    })
    .catch(error => {
        console.error(error);
    });
}

function borrarGastoAPI(idGasto) {
    fetch(`http://localhost:3000/${usuarioActual}/${idGasto}`,
        {
            method: "DELETE"
        }
    )
    .then(() => {
        cargarGastosAPI();
    })
    .catch(error => {
        console.error(error);
    });
}

function actualizarGastoAPI(gastoId, descripcion, valor, fecha) {
    const gastoActualizado = {
        descripcion,
        valor,
        fecha
    };

    fetch(`http://localhost:3000/${usuarioActual}/${gastoId}`,
        {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(gastoActualizado)
        }
    )
    .then(() => {
        cargarGastosAPI();
    })
    .catch(error => {
        console.error(error);
    });
}

// Inicialización  
crearFormulario();
mostrarListado();
mostrarTotal();

document.getElementById("form-usuario");
document.addEventListener("submit", event => {
    event.preventDefault();
    cargarGastosAPI();
});

// document.getElementById("guardar-gastos").addEventListener("click", guardarGastos);
// document.getElementById("recuperar-gastos").addEventListener("click", recuperarGastos);