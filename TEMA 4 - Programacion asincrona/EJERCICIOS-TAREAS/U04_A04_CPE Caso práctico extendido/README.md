<!-- Autor: Mario Segura Abad -->
<!-- Fecha: 05/02/2026 -->

# Práctica DWEC - Unidad 4 Apartado 4

## Ejercicios clave
- **Caso práctico extendido - Conexión del Gestor de gastos con una API de servidor**<br>
El objetivo es transformar el Gestor de gastos para que funcione __totalmente conectado a una API Node.js__, sustituyendo la lógica local por peticiones HTTP reales.<br>
La aplicación debe:
- Permitir introducir un __nombre de usuario__ mediante un formulario.
- Cargar los datos del usuario desde la API:
    - `GET http://localhost:3000/USUARIO`
- Añadir nuevos gastos:
    - `POST http://localhost:3000/USUARIO`
- Actualizar gastos existentes:
    - `PUT http://localhost:3000/USUARIO/gastoId`
- Eliminar gastos:
    - `DELETE http://localhost:3000/USUARIO/gastoId`

La API devuelve y recibe datos en __formato JSON__ y genera automáticamente los __id__ de los gastos.

## Instalación y requisitos

**Programas necesarios**
- **Node.js** (obligatorio para ejecutar la API).
- **Visual Studio Code** (recomendado como IDE).
- **Navegador web actualizado**: en mi caso, el Chrome.

**Instalación de la API**
1. Descomprimir el proyecto proporcionado.
2. Abrir la carpeta en nuestro editor de código.
3. Ejecutar en terminial `npm install`.
4. Arrancar la API: `npm run start`.
5. Probar usuarios de ejemplo en el navegador:
    - http://localhost:3000/usuario1
    - http://localhost:3000/usuario2

## Visualización

**En la aplicación Gestor de gastos**
1. Abrir el proyecto del Gestor de gastos en VS Code.
2. Ejecutarlo con Live Server (recomendado) o abriendo el `index.html`.
3. Introducir un nombre de usuario válido en el formulario.
4. Ver en pantalla:
    - El listado de gastos cargado desde la API.
    - Los nuevos gastos añadidos mediante POST.
    - Los gastos actualizados mediante PUT.
    - Los gastos eliminados mediante DELETE.
5. Revisar la consola (F12 --> "Consola") para:
    - Ver las peticiones realizadas.
    - Comprobar URLs, métodos y datos enviados.
    - Ver mensajes de autoría.

## Autoría
- Autor: __Mario Segura Abad__
- Fecha de realización: 05/02/2026