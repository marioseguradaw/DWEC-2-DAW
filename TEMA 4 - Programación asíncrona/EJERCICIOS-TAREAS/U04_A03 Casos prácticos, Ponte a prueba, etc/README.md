<!-- Autor: Mario Segura Abad -->
<!-- Fecha: 18/01/2026 -->

# Práctica DWEC - Unidad 4 Apartado 3

## Ejercicios clave
- __Caso práctico 3 - Procesamiento de múltiples promesas en paralelo__
    - El objetivo es lanzar **tres temporizadores a la vez**, cada uno con un tiempo distinto.
    - Cada temporizador es una **promesas** que se resuelve tras un `setTimeout()`.
    - El programa debe:
    1. Lanzar los tres temporizadores **en paralelo**.
    2. Esperar a que todos terminen usando `await Promise.all()`.
    3. Mostrar en consola los valores devueltos por cada uno.
- __Ponte a prueba 3 - Conversión de promesas a async/await__
    - Se debe transformar el código del ejemplo de *Media Devices* (que usa `.then()` y `.catch()`) para que utilice **async/await**.
    - Reglas importantes:
        - `await` solo puede usarse dentro de funciones `async` o módulos ES.
        - `await` **pausa** la ejecución hasta que la promesa se resuelve.
        - El resultado se obtiene directamente, sin necesidad de `.then()`.

## Instalación y requisitos
No se necesita instalar nada como tal, bastará con tener:
- __Editor recomendado__: en mi caso VS Code.
- __Navegador web actualizado__: en mi caso, el Chrome.
- __Opcional__: Node.js si se desea ejecutar los scripts desde la terminal.
*(No se requiren extensiones ni librerías externas)*

## Cómo visualizarlo

**En navegador**
1. Guardar los archivos `.js` y `.html` en la misma carpeta.
2. Si usas `await` fuera de funciones, enlaza el script como módulo.
3. Abre el archivo `.html` en el navegador.
4. Abre la consola (F12 --> Consola).
5. Observa:
    - Los tres temporizadores ejecutándose en paralelo.
    - Los resultados agrupados cuando todos terminan.
    - La prueba de autoría.

## Autoría
- Autor: __Mario Segura Abad__
- Fecha de realización: 18/01/2026