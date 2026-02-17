<!-- Autor: Mario Segura Abad -->
<!-- Fecha: 10/10/2025 -->

# Práctica DWEC - Unidad 2

## ¿Qué se ha hecho?
- Se han creado objetos en JavaScript usando tres enfoques distintos:
    - **Clases (sintax `class`)** (__en mi caso__)
    - **Funciones constructoras**
    - `Object.create()`
- Se ha implementado la herencia entre objetos y métodos compartidos.
- Se ha analizado el comportamiento de `this` en distintos contextos de ejecución.
- Todo el código teórico ha sido probado y documentado con pantallazos y comentarios de autoría.

## Ejercicios clave
**Caso práctico 3 - Objetos y prototipos**
- Se han creado objetos `Enemigo` (**clase padre**), `Orco` y `Troll` (**clases hijas**) con métodos como `mover()` (clase `Enemigo`), `disparar()` (clase `Orco`) y `golpear()` (clase `Troll`).
- Se ha demostrado cómo heredar propiedades y métodos entre objetos usando los tres sistemas mencionados.
- Se ha comprobado que mi enfoque (**sintax `class`**) funciona correctamente y permite poder reutilizar código.

**Ponte a prueba 3 - `this`**
- Se ha analizado cómo `this` cambia según el contexto de llamada:
    - Dentro de un objeto -> apunta al propio objeto.
    - Fuera de contexto -> `undefined` o `window`.
    - Con `bind()` -> se fija el valor de `this`.
    - En funciones lambda -> hereda el `this` del entorno donde se define.

## Instalación

**Requisitos mínimos**:
- **Editor de código**: en mi caso, Visual Studio Code.
- **Navegador web**: Para ejecutar scripts con `document.write()` o `prompt()`.
- Node.js o la consola del navegador (F12): Para ejecutar scripts con `console.log()` desde la terminal o consola.

## ¿Cómo se visualiza?

**En navegador**:
1. Abre el archivo `.html` con doble clic.
2. Introduce los datos si el script lo solicita.
3. Verás el resultado directamente en pantalla.

**En consola del navegador**:
1. Abre el navegador (en mi caso, __Google Chrome__).
2. Abre la consola (F12).
3. Observa el resultado y los tiempos de ejecución si se usan `console.time()` (que no es nuestro caso).

## Prueba de Autoría
- Autor: **Mario Segura Abad**
- Fecha de realización: 10/10/2025