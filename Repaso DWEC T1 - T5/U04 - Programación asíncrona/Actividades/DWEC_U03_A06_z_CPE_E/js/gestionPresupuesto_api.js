// Autor: Mario Segura Abad
// Fecha: 15/06/2026

let usuarioActual = "";
let gastos = [];

// Carga los gastos del usuario desde la API
function cargarGastos() {
    usuarioActual = document.getElementById("usuario").value.trim();

    if (!usuarioActual) {
        alert("Debes indicar un usuario primero.");
        return;
    }

    fetch(`http://localhost:3000/${usuarioActual}`)
        .then(respuesta => respuesta.json())
        .then(datos => {
            gastos = datos;

            mostrarListadoGastos();
            mostrarTotalGastos();
        })
        .catch(error => {
            console.error(error);
            alert("Error al cargar los gastos. Inténtelo de nuevo");
        });
}

// Muestra el total de gastos
function mostrarTotalGastos() {
    const total = gastos.reduce((acumulador, gasto) => 
        acumulador + gasto.valor, 0
    );

    document.getElementById("total-gastos").textContent = 
        `Total de gastos: ${total} €.`;
}

// Muestra el listado de gastos
function mostrarListadoGastos() {
    const listadoDiv = document.getElementById("listado-gastos");

    listadoDiv.innerHTML = "";

    gastos.forEach(gasto => {
        console.log(gasto);
        const gastoDiv = document.createElement("div");

        gastoDiv.textContent =
            `${gasto.descripcion} - ${gasto.valor} € - ${new Date(gasto.fecha).toLocaleDateString()}`;

        listadoDiv.appendChild(gastoDiv);

        const botonEditar = document.createElement("button");
        botonEditar.textContent = "Editar";

        botonEditar.addEventListener("click", event => {
            const nuevaDescripcion = prompt("Nueva descripción:", gasto.descripcion);
            const nuevoValor = parseFloat(prompt("Nuevo valor:", gasto.valor));

            actualizarGasto(gasto.id, nuevaDescripcion, nuevoValor, gasto.fecha);
        });
        gastoDiv.appendChild(botonEditar);

        const botonBorrar = document.createElement("button");
        botonBorrar.textContent = "Borrar";

        botonBorrar.addEventListener("click", event => {
            if (confirm("¿Seguro que deseas borrar este gasto?")) {
                borrarGasto(gasto.id);
            }
        });
        gastoDiv.appendChild(botonBorrar);
    });
}

// Inicialización
document.getElementById("form-usuario");

document.addEventListener("submit", event => {
    event.preventDefault();
    cargarGastos();
});

// Crea el formulario para añadir nuevos gastos
function crearFormularioGastos() {
    // console.log("ENTRANDO EN crearFormularioGastos");
    const contenedor = document.getElementById("form-gasto");

    const formulario = document.createElement("form");
    formulario.id = "nuevo-gasto";

    const descripcion = document.createElement("input");
    descripcion.placeholder = "Descripción";
    descripcion.required = true;

    const valor = document.createElement("input");
    valor.placeholder = "Valor";
    valor.type = "number";

    const fecha = document.createElement("input");
    fecha.type = "date";

    const boton = document.createElement("button");
    boton.textContent = "Añadir gasto";
    boton.type = "submit";

    formulario.append(descripcion, valor, fecha, boton);

    contenedor.appendChild(formulario);

    // Registrar el submit
    formulario.addEventListener("submit", event => {
        event.preventDefault();

        const gasto = {
            descripcion:
                descripcion.value,

            valor:
                parseFloat(valor.value),
        
            fecha:
                Date.parse(fecha.value)
        };

        guardarGasto(gasto);
    });
}

function guardarGasto(gasto) {
    fetch(`http://localhost:3000/${usuarioActual}`,
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(gasto)
        }
    )
    .then(() => {
        cargarGastos();
    })
    .catch(error => {
        console.error(error);
    });
}

function actualizarGasto(gastoId, descripcion, valor, fecha) {
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
        cargarGastos();
    })
    .catch(error => {
        console.error(error);
    });
}

function borrarGasto(gastoId) {
    fetch(`http://localhost:3000/${usuarioActual}/${gastoId}`,
        {
            method: "DELETE"
        }
    )
    .then(() => {
        cargarGastos();
    })
    .catch(error => {
        console.error(error);
    });
}

crearFormularioGastos();