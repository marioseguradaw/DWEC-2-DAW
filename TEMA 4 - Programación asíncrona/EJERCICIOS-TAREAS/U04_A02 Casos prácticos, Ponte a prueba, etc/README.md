<!-- Autor: Mario Segura Abad -->
<!-- Fecha: 12/01/2026 -->

# Práctica DWEC - Unidad 4 Apartado 2

## Ejercicios clave
- **Caso práctico 2 - Encadenamiento de promesas**
    - El objetivo es ejecutar __tres temporizadores en serie__, uno detrás de otro.
    - Cada temporizador se implementa como una __promesa__ que se resuelve tras un `setTimeout`.
    - El flujo debe ser::
    1. Termina temporizador 1 --> mensaje en consola.
    2. Empieza temporizador 2 --> termina --> mensaje.
    3. Empieza temporizador 3 --> termina --> mensaje.
    - Al final, ocurra lo que ocurra, se ejecuta un `.finally()` mostrando un mensaje final.
- **Ponte a prueba 2 - Errores en el trabajo con promesas**

- __Problema__:
    - `temporizador(3000)` devuelve **una promesa**, no el resultado final.
    - Por eso aparece en consola: **"[object Promise]"**
- __Solución__:
    - Usar `.then()` para obtener el valor cuando la promesa se resuelva.

## Instalación y requisitos
No hace falta instalar nada como tal, bastará con tener lo esencial:
- __Editor de código compatible__: en mi caso, VS Code.
- __Navegador web actualizado__: en mi caso el Chrome.
- __Opcional__: Node.js si quieres ejecutar los scripts desde la terminal.
*(No se requieren extensiones ni librerías externas.)*

## Cómo visualizarlo

__En navegador__
1. Guardar los archivos `.js` y `.html` en la raíz del proyecto.
2. Enlaza el script en el HTML con `<script src="archivo.js"></script>`
3. Abre el HTML en el navegador.
4. Abre la consola (F12 --> Consola).

## Prueba de autoría
- Autor: __Mario Segura Abad__
- Fecha de realización: 12/01/2026