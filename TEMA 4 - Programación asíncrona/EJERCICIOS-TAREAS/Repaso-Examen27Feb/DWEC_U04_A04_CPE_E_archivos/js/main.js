// Autor: Mario Segura Abad
// Fecha: 26/02/2026

const formUsuario = document.getElementById("formUsuario");
const formGasto = document.getElementById("formGasto");
const listaGastos = document.getElementById("listaGastos");

let usuarioActual = "";

// ==== CARGAR GASTOS (GET) ====
formUsuario.addEventListener("submit", async (e) => {
    e.preventDefault();
    usuarioActual = document.getElementById("usuario").value.trim();
    await cargarGastos();
});

async function cargarGastos() {
    const respuesta = await fetch(`http://127.0.0.1:3000/${usuarioActual}`);
    const gastos = await respuesta.json();

    listaGastos.innerHTML = "";

    gastos.forEach(gasto => {
        const li = document.createElement("li");
        li.innerHTML = `
            ${gasto.descripcion} - ${gasto.cantidad}€
            <button onclick="editarGasto(${gasto.gastoId})">Editar</button>
            <button onclick="eliminarGasto(${gasto.gastoId})">Eliminar</button>
        `;
        listaGastos.appendChild(li);
    });
}

// ==== CREAR GASTO (POST) ====
formGasto.addEventListener("submit", async (e) => {
    e.preventDefault();

    const descripcion = document.getElementById("descripcion").value;
    const cantidad = document.getElementById("cantidad").value;

    const nuevoGasto = {
        descripcion,
        cantidad: Number(cantidad)
    };

    await fetch(`http://127.0.0.1:3000/${usuarioActual}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nuevoGasto)
    });

    formGasto.reset();
    await cargarGastos();
});

// ==== ELIMINAR GASTO (DELETE) ====
async function eliminarGasto(id) {
    await fetch(`http://127.0.0.1:3000/${usuarioActual}/${id}`, {
        method: "DELETE"
    });

    await cargarGastos();
}

// ==== EDITAR GASTO ====
async function editarGasto(id) {
    const nuevaDescripcion = prompt("Nueva descripción:");
    const nuevaCantidad = prompt("Nueva cantidad:");

    const gastoActualizado = {
        descripcion: nuevaDescripcion,
        cantidad: Number(nuevaCantidad)
    };

    await fetch(`http://127.0.0.1:3000/${usuarioActual}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(gastoActualizado)
    });

    await cargarGastos();
}