// Autor: Mario Segura Abad
// Fecha: 26/02/2026


// Librería de acceso a datos

// Acceso a las funciones de lectura/escritura de ficheros en NodeJS en forma de promesas
// Las funciones a utilizar son:
// fs.readFile(RUTA_FICHERO) - Para leer el contenido de un fichero. Devuelve una promesa.
// fs.writeFile(RUTA_FICHERO, DATOS_EN_FORMATO_TEXTO) - Para escribir el contenido de un fichero. Devuelve una promesa.
import { promises as fs } from 'fs';

// Ruta del fichero de almacenamiento de datos
let ficheroDatos = "./datos.json";

// Para actualizar el fichero de datos en los tests
function cambiarFicheroDatos(nombre) {
    ficheroDatos = nombre;
}

// Debe devolver una promesa que cuando se resuelva devuelva el array de gastos del usuario
function obtenerGastosUsuario(usuario) {
    return fs.readFile(ficheroDatos, 'utf-8')
        .then(data => {
            const db = JSON.parse(data);
            // Si el usuario existe devolvemos sus gastos, sino, array vacío
            return db[usuario] || [];
        });
}

// Debe devolver una promesa. Cuando se resuelva se debe haber añadido un nuevo gasto al usuario
// y actualizado el fichero de datos
function anyadirGastoUsuario(usuario, gasto) {
    return fs.readFile(ficheroDatos, 'utf-8')
        .then(data => {
            const db = JSON.parse(data);

            // Si el usuario no existe, se creará
            if (!db[usuario]) {
                db[usuario] = [];
            }

            // Añadimos el gasto al array de usuario
            db[usuario].push(gasto);

            // Escribimos los datos actualizados (JSON.stringify con null, 2 para formato legible)
            return fs.writeFile(ficheroDatos, JSON.stringify(db, null, 2));
        });
}

// Debe devolver una promesa. Cuando se resuelva se debe haber modificado el gasto del usuario
// y actualizado el fichero de datos
function actualizarGastoUsuario(usuario, gastoId, nuevosDatos) {
    return fs.readFile(ficheroDatos, 'utf-8')
        .then(data => {
            const db = JSON.parse(data);

            // En el caso de que el usuario no exista, se generará un error
            if (!db[usuario]) {
                throw new Error(`El usuario ${usuario} no existe.`);
            }

            // Buscamos el índice del gasto a modificar
            const indiceGasto = db[usuario].findIndex(g => g.id === gastoId);

            // En el caso de que el gasto no exista, se generará un error
            if (indiceGasto === -1) {
                throw new Error(`El gasto con ID ${gastoId} no existe.`);
            }

            // Actualizamos los datos mezclando lo anterior con lo nuevo
            db[usuario][indiceGasto] = {
                ...nuevosDatos,
                id: gastoId
            };

            return fs.writeFile(ficheroDatos, JSON.stringify(db, null, 2));
        });
}

// Debe devolver una promesa. Cuando se resuelva se debe haber eliminado el gasto del usuario
// y actualizado el fichero de datos
function borrarGastoUsuario(usuario, gastoId) {
    return fs.readFile(ficheroDatos, 'utf-8')
        .then(data => {
            const db = JSON.parse(data);

            // En el caso de que el usuario indicado no exista, se generará  un error
            if (!db[usuario]) {
                throw new Error(`El usuario ${usuario} no existe.`);
            }

            // Eliminamos el gasto filtrando el array para excluir ese ID
            const gastosFiltrados = db[usuario].filter(g => g.id !== gastoId);
            db[usuario] = gastosFiltrados;

            return fs.writeFile(ficheroDatos, JSON.stringify(db, null, 2));
        });
}

// Exportación de funciones
// Normalmente en NodeJS se utiliza el sistema CommonJS,
// pero se ha configurado el proyecto para que utilice módulos indicando
// 'type = module' en el archivo 'package.json'
export {
    obtenerGastosUsuario,
    anyadirGastoUsuario,
    actualizarGastoUsuario,
    borrarGastoUsuario,
    // Para poder utilizar uno distinto en los tests y no interferir con los datos reales
    cambiarFicheroDatos
}
