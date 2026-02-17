<!-- Autor: Mario Segura Abad -->
<!-- Fecha: 23/11/2025 -->

# Práctica DWEC - Apartado 3  Unidad 3

## Ejercicios clave
- Este casao práctico amplía el gestor personal con una **interfaz web sencilla**.
- Se añaden dos archivos principales:
    - `index.html`: contiene la estructura básica de la página (HTML5 válido) con capas para:
        - Mostrar el total de gastos.
        - Alojar el formulario de creación de gastos.
        - Mostrar el listado de gastos.
        - Cargar el script `gestionarPresupuestoWebV1.js`.
    - `gestionPresupuestoWebV1.js`: contiene la lógica para:
        - Importar la librería `gestionPresupuesto.js` (la lógica de negocio).
        - Crear dinámicamente el formulario de gastos y procesar su envío con `anyadirGasto`.
        - Mostrar el listado de gastos con sus datos (descripción, valor, fecha, etiquetas).
        - Añadir un botón de borrado para cada gasto, con confirmación antes de eliminarlo.
        - Repintar el listado y el total cada vez que se añade o se borra un gasto.
- Todo el HTML visible (formulario y listado) se genera desde JavaScript; el `index.html` solo contiene el esqueleto y los contenedores.

## Instalación y requisitos
No hace falta instalar nada como tal, bastará con tener:
- **Editor de código**: en mi caso VS Code.
- **Navegador web actualizado**: en mi caso el Chrome.
*(No es necesario `Node.js` en este caso, ya que todo se ejecuta en el navegador.)*

## Visualización

**En navegador**:
1. Guardar los archivos `index.html`, `gestionPresupuestoWebV1.js` y `gestionPresupuesto.js` en la raíz del proyecto.
2. Abrir el archivo `index.html` con doble click o desde un servidor local como la extensión "Go Live" (muy recomendable).
3. Probar el formulario de creación de gastos: al enviar, se añade al listado y se actualiza el total.
4. Pulsar los botones de borrado para comprobar la eliminación con confirmación.
5. Revisar la consola del navegador (F12 --> Consola) para verificar mensajes de prueba de autoría.

## Prueba de Autoría
- Autor: **Mario Segura Abad**
- Fecha de realización: 23/11/2025