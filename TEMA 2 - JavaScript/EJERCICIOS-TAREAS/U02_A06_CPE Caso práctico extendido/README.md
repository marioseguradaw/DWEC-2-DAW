<!-- Autor: Mario Segura Abad -->
<!-- Fecha: 11/11/2025 -->

# Práctica DWEC - Unidad 2

## ¿Qué se ha hecho?
- Este caso práctico amplía el gestor de presupuesto "personal".
- Se añaden dos funciones clave y muy importantes:
    - `filtrarGastos`: permite buscar gastos según criterios (fechas, valores, texto en descripcion, etiquetas).
    - `agruparGastos`: agrupa los gastos por periodos (día, mes, año) y suma sus valores, con posibilidad de filtrar por etiquetas y fechas.
- Se incorpora al objeto **Gasto** el método `obtenerPeriodoAgrupacion`, que devuelve el periodo correspondiente a su fecha (ejemplo: `"2021-09"`, `"2021-11-24"`, `"2021"`).
- Se trabaja con **programación funcional** usando `filter` y `reduce` para implementar búsquedas y cálculos y bucles tradicionales.
- Los tests se validan con `npm run test3`, comprobando que las funciones están correctamente implementadas.

## Instalación y requisitos
No hace falta instalar absolutamente nada como tal, bastará con tener:
- **Editor de código**: en mi caso VS Code.
- Node.js: necesario para poder ejecutar los tests (`npm run test3`).

## Visualización

**En consola (Node.js)**
1. Abre la terminal en la carpeta raíz del proyecto
2. Ejecuta los tests con: `npm run test3`.
3. Comprueba que los tests superan y que las funciones devuelven los resultados esperados.

## Prueba de Autoría
- Autor: **Mario Segura Abad**
- Fecha de realización: 11/11/2025