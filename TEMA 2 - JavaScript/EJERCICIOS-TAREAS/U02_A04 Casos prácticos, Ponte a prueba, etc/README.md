<!-- Autor: Mario Segura Abad -->
<!-- Fecha: 17/10/2025 -->

# Práctica DWEC - Unidad 2

## ¿Qué se ha hecho?
Se ha trabajado con el sistema de módulos ES6 en JavaScript para dividir el código en archivos reutilizables y facilitar su mantenimiento.

Se han realizado dos ejercicios principales concretos:
1. **Creación de un módulo JavaScript** (`enemigos.js`) que contiene clases exportadas (`Enemigo`, `EnemigoVolador`, `EnemigoSubterraneo`), cada una con sus propiedades y métodos.
2. **Importación de una librería externa (Chart.js)** desde un CDN usando el formato ESM exigido en la explicación del ejercicio, para generar un gráfico de barras en una página HTML.

Todo el código estará comentado con nombre y fecha, y también acompañado de pantallazos de ejecución.

## Ejercicios clave
- **Caso Práctico**: creación del módulo `enemigo.js` con clases exportadas, y una página HTML que importa el módulo y crea instancias a los objetos de cada clase.
- **Ponte a Prueba**: modificación de un archivo HTML proporcionado en la tarea como descargable para importar correctamente la librería `chart.js` desde jsdelivr usando `chart.esm.js`, y visualización de una gráfica con los objetos `Chart`, `LinearScale`, `BarController`, `CategoryScale` y `BarElement`.

## Instalación

**Requisitos mínimos**:
- **Editor de código**: en mi caso, Visual Studio Code.
- **Navegador web**: Para ejecutar scripts con `document.write()` o `prompt()`.
- Node.js o la consola del navegador (F12): Para ejecutar scripts con `console.log()` desde la terminal o consola.

## ¿Cómo se visualiza?

**En navegador**:
1. Abre, tanto el archivo `.js` como el archivo `.html`.
2. Guarda dichos archivos en la misma carpeta (__muy importante__).
3. Abre el archivo `.html` en el editor de código y, (si tienes la extensión) pulsa en "Go Live".
4. El script se abre automáticamente y muestra los resultados en la consola del navegador (F12) o en pantalla directamente (si hay elementos como `<canvas>` para gráficos).

**En consola** (opcional):
1. Abre la terminal.
2. Navega hasta la carpeta raíz del proyecto.
3. Ejecuta el archivo con:<br>
`node nombreDelArchivo.js`
4. Verás los resultados por consola.

## Prueba de Autoría
- Autor: **Mario Segura Abad**
- Fecha de realización: 17/10/2025