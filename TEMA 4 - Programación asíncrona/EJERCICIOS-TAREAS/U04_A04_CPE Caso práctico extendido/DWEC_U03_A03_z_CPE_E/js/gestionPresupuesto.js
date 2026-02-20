// Autor: Mario Segura Abad
// Fecha: 05/02/2026


// ---- CONFIGURACIÓN INICIAL ----
const BASE_URL = 'http://localhost:3000';
let usuarioUsuario = null;

// Referencias al DOM
const seccionLogin = document.getElementById('seccion-login');
const seccionApp = document.getElementById('seccion-app');
const inputUsuario = document.getElementById('inputUsuario');
const btnCargarUsuario = document.getElementById('btnCargarUsuario');
const nombreUsuarioDisplay = document.getElementById('nombreUsuarioDisplay');
const btnSalir = document.getElementById('btnSalir');
const formulario = document.getElementById('formulario-gasto');
const listaGastos = document.getElementById('lista-gastos');

// ---- MANEJADORES DE EVENTOS ----

// 1. INICIAR SESION (GET)
btnCargarUsuario.addEventListener('click', () => {
    const usuario = inputUsuario.value.trim();
    if (usuario) {
        usuarioActual = usuario;
        cambiarPantalla('APP');
        cargarGastosAPI(); // Carga inicial
    } else {
        alert("Por favor, esribe un nombre de usuario.");
    }
});

// 2. AGREGAR GASTO (POST)
formulario.addEventListener('submit', async (e) => {
    e.preventDefault

    // Capturamos los valores del HTML
    const conceptoInput = document.getElementById('concepto').value;
    const cantidadInput = document.getElementById('cantidad').value;

    // Preparamos el objeto JSON tal como lo quiere la API
    const nuevoGasto = {
        descripcion: conceptoInput, // La API espera "descripcion"
        valor: parseFloat(cantidadInput) // La API espera "valor"
    };

    await crearGastoAPI(nuevoGasto);
});

// 3. BORRAR GASTO (DELETE) - Delegación de eventos
listaGastos.addEventListener('click', async (e) => {
    // Si el elemento clickeando tiene la clase 'btn-borrar'
    if (e.target.classList.contains('btn-borrar')) {
        const idParaBorrar = e.target.getAttribute('data-id');
        await borrarGastoAPI(idParaBorrar);
    }
});

// 4. SALIR
btnSalir.addEventListener('click', () => {
    location.reload(); // Recarga la pagina para reiniciar
});

// ---- FUNCIONES DE API (FETCH) ----

// LEER GASTOS (GET http://localhost:3000/USUARIO)
async function cargarGastosAPI() {
    try {
        const respuesta = await fetch(`${BASE_URL}/${usuarioActual}`);

        if (!respuesta.ok) throw new Error("Error al conectar con el servidor");

        const datos = await respuesta.json();
        renderizarLista(datos); // Pintamos los datos recibidos

    } catch (error) {
        console.error(error);
        alert("Error cargando datos. Revisa que el servidor (npm start) está encendido.");
    }
}

// CREAR GASTO (POST http://localhost:3000/USUARIO)
async function crearGastoAPI(objetoGasto) {
    try {
        const respuesta = await fetch(`${BASE_URL}/${usuarioActual}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(objetoGasto)
        });

        if (respuesta.ok) {
            formulario.reset(); // Limpiamos el formulario
            cargarGastosAPI(); // Recargamos la lista para ver el nuevo gasto
        } else {
            alert("No se pudo guardar el gasto.");
        }
    } catch (error) {
        console.error("Error al crear:", error);
    }
}

// BORRAR GASTO (DELETE http://localhost:3000/USUARIO/ID)
async function borrarGastoAPI(id) {
    if (!confirm("¿Seguro que quieres borrar este gasto?")) return;

    try {
        const respuesta = await fetch(`${BASE_URL}/${usuarioActual}/${id}`, {
            method: 'DELETE'
        });

        if (respuesta.ok) {
            cargarGastosAPI(); // Recargamos la lista
        } else {
            alert("Error al intentar borrar.");
        }
    } catch (error) {
        console.error("Error al borrar:", error);
    }
}

// ---- FUNCIONES DE INTERFAZ (UI) ----
function cambiarPantalla(pantalla) {
    if (pantalla === 'APP') {
        seccionLogin.style.display = 'none';
        seccionApp.style.display = 'block';
        nombreUsuarioDisplay.textContent = usuarioActual;
    }
}

function renderizarLista(gastos) {
    listaGastos.innerHTML = ''; // Limpiar lista actual

    if (!gastos || gastos.length === 0) {
        listaGastos.innerHTML = '<p style="text-algin:center; color:#888;">No hay gastos registrados.</p>';
        return;
    }

    gastos.forEach(gasto => {
        // Creamos el LI
        const li = document.createElement('li');

        // "Inyectamos" el HTML usando las propiedades correctas: descripcion y valor
        li.innerHTML = `
            <div class="detalle">
                <strong>${gasto.descripcion}</strong> <br>
                <small>${gasto.valor} €</small>
            </div>
            <button class="btn-borrar" data-id="${gasto.id}">Eliminar</button>
        `;

        listaGastos.appendChild(li);
    });
}