<!-- Autor: Mario Segura Abad -->
<!-- Fecha: 04/12/2025 -->

# Práctica DWEC - Unidad 3 Apartado 6

## Ejercicios clave
- Se amplía el gestor de gastos añadiendo **persistencia con LocalStorage.**
- Archivos implicados:
    - `index2.html`: se añaden dos botones, uno para **guardar** el listado de gastos y otro paara **recuperar**.
    - `gestionPresupuestoWebV2.js`: contiene ls manejadores de eventos para guardar y recuperar.
- **Claves de resolución**:
    - Usar `listarGastos` para obtener el listado actual.
    - Guardar con `localStorage.setItem("gastos", JSON.stringify(listado))`.
    - Recuperar con `JSON.parse(localStorage.getItem("gastos"))`.
    - Al recuperar, los objetos son "planos"; hay que **reconstuirlos** con el prototipo de la lógica de negocio para que mantengan sus métodos.
    - Crear una función en la lógica de negocio que sobrescriba el listado actual con el recuperado.

## Instalación y requisitos
No hace falta instalar nada como tal, bastará con tener:
- **Editor de código compatible**: en mi caso el VS Code.
- **Navegador web actualizado**: en mi caso, el Chrome.
*(No es necesario Node.js ni extensiones adicionales, todo se ejecuta en la pantalla del navegador.)*

## Visualización

**Pasos:**
1. Guardar los archivos `index2.html` y `gestionPresupuestoWebV2.js` en la raíz del proyecto, junto con la lógica de negocio.
2. Abrir `index2.html` en el navegador.
3. Añadir algunos gastos desde el formulario.
4. Pulsar el botón **Guardar gastos** para almacenarlos en LocalStorage.
5. Pulsar el botón **Recuperar gastos** para cargar los datos guardados y comprobar que se reconstruyen correctamente.
6. Revisar la consola del navegador (F12 -> "Consola") para verificar mensajes de prueba de autoría.

## Prueba de Autoría
- Autor: **Mario Segura Abad**
- Fecha de realización: 04/12/2025