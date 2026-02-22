<!-- Autor: Mario Segura Abad -->
<!-- Fecha: 22/02/2026 -->

# Práctica DWEC - Unidad 4 Apartado 2

## Ejercicios clave
- **Caso práctico extendido U04_A02_CPE - Librería de gestión de gastos con promesas**<br>
El objetivo es crear una __librería Node.js__ que gestione los datos de distintos usuarios almacenados en un fichero `datos.json`, utilizando __promesas__ y la API `fs` de NodeJS.<br>
La librería debe implementar __cuatro funciones__, todas basadas en promesas:
1. __obtenerGastosUsuario(usuario)__
- Lee el fichero `datos.json`.
- Convierte el contenido JSON a objeto.
- Devuelve el array de gastos del usuario o un array vacío si no existe.
2. __anyadirGastoUsuario(usuario, gasto)__
- Lee el fichero.
- Convierte el JSON a objeto.
- Añade el gasto al usuario (creándolo si no existiese)
- Escribe el fichero actualizado.
3. __actualizarGastoUsuario(usuario, gastoId, nuevosDatos)__
- Lee el fichero.
- Convierte el JSON a objeto.
- Busca el gasto por id y lo actualiza.
- Si no existe usuario o gasto --> lanza error.
- Escribe el fichero actualizado.
4. __borrarGastoUsuario(usuario, gastoId)__
- Lee el fichero.
- Convierte el JSON a objeto.
- Elimina el gasto indicado.
- Si no existe usuario --> lanza error.
- Escribe el fichero actualizado.

## Instalación y requisitos

__Programas necesarios__
- **Node.js** (obligatorio).
- **Visual Studio Code** (en mi caso concreto).

__Dependencias del proyecto__<br>
El proyecto ya incluye las dependencias necesarias. Solo hay que instalarlas: `npm install`.

## Visualización

__Pasos para ejecutar el caso práctico extendido__
1. Descargar y descomprimir el proyecto base.
2. Abrir la carpeta en VS Code.
3. Instalar dependencias: `npm install`.
4. Completar las funciones marcadas con __TODO__ en los archivos de la librería.
5. Ejecutar los tests automáticos: `npm run test`.
6. Revisar la consola.

## Autoría
- Autor: __Mario Segura Abad__
- Fecha de realización: 22/02/2026