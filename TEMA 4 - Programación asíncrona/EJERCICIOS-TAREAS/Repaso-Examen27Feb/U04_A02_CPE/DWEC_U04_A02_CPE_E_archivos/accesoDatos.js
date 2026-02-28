// Autor: Mario Segura Abad
// Fecha: 27/02/2026


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
        .then(datos => {
            const bd = JSON.parse(datos);

            return bd[usuario] || [];
        });
}

// Debe devolver una promesa. Cuando se resuelva se debe haber añadido un nuevo gasto al usuario
// y actualizado el fichero de datos
function anyadirGastoUsuario(usuario, gasto) {
    return fs.readFile(ficheroDatos, 'utf-8')
        .then(datos => {
            const bd = JSON.parse(datos);

            if (!bd[usuario]) {
                return bd[usuario] = [];
            }

            bd[usuario].push(gasto);

            return fs.writeFile(ficheroDatos, JSON.stringify(bd, null, 2));
        });
}

// Debe devolver una promesa. Cuando se resuelva se debe haber modificado el gasto del usuario
// y actualizado el fichero de datos
function actualizarGastoUsuario(usuario, gastoId, nuevosDatos) {
    return fs.readFile(ficheroDatos, 'utf-8')
        .then(datos => {
            const bd = JSON.parse(datos);

            if (!bd[usuario]) {
                throw new Error(`El usuario ${usuario} no existe.`);
            }

            const gastosModificados = bd[usuario].findIndex(g => g.id === gastoId);

            if (gastosModificados === -1) {
                throw new Error(`El gasto con el ID ${gastoId} no existe.`);
            }

            bd[usuario][gastosModificados] = {
                ...nuevosDatos,
                id: gastoId
            };

            return fs.writeFile(ficheroDatos, JSON.stringify(bd, null, 2));
        });
}

// Debe devolver una promesa. Cuando se resuelva se debe haber eliminado el gasto del usuario
// y actualizado el fichero de datos
function borrarGastoUsuario(usuario, gastoId) {
    return fs.readFile(ficheroDatos, 'utf-8')
        .then(datos => {
            const bd = JSON.parse(datos);

            if (!bd[usuario]) {
                throw new Error(`El usuario ${usuario} no existe.`);
            }

            const gastosFiltrados = bd[usuario].filter(g => g.id !== gastoId);
            bd[usuario] = gastosFiltrados;

            return fs.writeFile(ficheroDatos, JSON.stringify(bd, null, 2));
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
