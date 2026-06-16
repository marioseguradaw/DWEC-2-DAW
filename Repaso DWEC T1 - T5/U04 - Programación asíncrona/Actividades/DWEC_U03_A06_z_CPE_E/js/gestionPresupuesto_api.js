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
        const gastoDiv = document.createElement("div");

        gastoDiv.textContent =
            `${gasto.descripcion} - ${gasto.valor} € - ${new Date(gasto.fecha).toLocaleDateString()}`;

        listadoDiv.appendChild(gastoDiv);
    });
}

// Inicialización
document.getElementById("form-usuario");
document.addEventListener("submit", event => {
    event.preventDefault();
    cargarGastos();
});