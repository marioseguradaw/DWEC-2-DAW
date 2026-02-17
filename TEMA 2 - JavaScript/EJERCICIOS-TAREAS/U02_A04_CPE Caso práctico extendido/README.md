<!-- Autor: Mario Segura Abad -->
<!-- Fecha: 22/10/2025 -->

# Práctica DWEC - Unidad 2

## ¿Qué se ha hecho?
Se ha ampliado la funcionalidad del gestor para permitir la gestión completa de una lista de gastos y enriquecer cada objeto `Gasto` con más propiedades.

Este caso práctico incluye:
- **Variables globales**:
    - `gastos`
    - `idGasto`
- **Funciones implementadas**:
    - `listarGastos()`
    - `anyadirGasto(gasto)`
    - `borrarGasto()`
    - `calcularTotalGastos()`
    - `calcularBalance()`
- **Mejoras al objeto `Gasto`**:
    - Propiedad `fecha`: almacenada como timestamp.
    - Propiedad `etiquetas`: array de categorías.
    - Métodos:
        - `mostrarGastoCompleto()`
        - `actualizarFecha(fechaString)`
        - `anyadirEtiquetas(...etiquetas)`
        - `borrarEtiquetas(...etiquetas)`

## Ejercicios clave

- **Caso Práctico**: creación y gestión de objetos `Gasto` con propiedades avanzadas y métodos personalizados.
- **Ponte a Prueba**: implementación de funciones globales para manejar la lista de gastos y calcular totales y balances.

## Instalación y requisitos
No se necesita instalar ningún programa específico como tal, bastará con tener lo siguiente:
- **Editor de código compatible**: en mi caso VS Code.
- Node.js: Para ejecutar los tests con `npm run test2`.
- **Extensión opcional** (y la que yo personalmente recomiendo): Live Server en VS Code para visualizar directamente en pantalla si se crease una interfaz HTML (que no es mi caso).

## Cómo se visualiza

**En consola (Node.js)**:
1. Abre la terminal.
2. Navega hasta la carpeta del proyecto.
3. Ejecuta los tests con:
`npm run test2`
4. Verifica que se superan los tests y que las funciones devuelven los resultados esperados.

**En navegador (opcional)**:
1. Si se hubiese creado una interfaz HTML, abre el archivo `.html` con doble click.
2. Interactúa con el gestor de gastos desde el navegador.
3. Abre la consola del navegador (F12) para ver los mensajes de salida.

## Prueba de Autoría
- Autor: **Mario Segura Abad**
- Fecha de realización: 22/10/2025