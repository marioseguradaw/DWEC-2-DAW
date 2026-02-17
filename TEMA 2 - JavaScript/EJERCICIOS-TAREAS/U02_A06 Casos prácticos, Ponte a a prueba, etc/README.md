<!-- Autor: Mario Segura Abad -->
<!-- Fecha: 01/11/2025 -->

# Práctica DWEC - Unidad 2

## ¿Qué se ha hecho?
Se han realizado dos ejercicios clave para comprender el comportamiento de JavaScript en distintos entornos de ejecución y cómo manejar errores de forma segura.
1. **Comprobación del modo estricto**:
- Se ha ejecutado un mismo script en tres contextos distintos:
    - De forma convencional (sin restricciones).
    - Activando el modo estricto con `"use strict"`.
    - Usando `type="module"` en la etiqueta `<script>`, que activa el modo estricto automáticamente.
- Se ha analizado cómo el uso de variables no declaradas provoca errores en modo estricto, y cómo este modo ayuda a detectar malas prácticas en el código.
2. **Control de errores en funciones**:
- Se ha modificado una función que accede a una propiedad de un objeto para evitar errores si el parámetro es `null` o `undefined`.
- Se ha utilizado un bloque `try...catch` para capturar el error, mostrar un mensaje en consola y devolver un valor seguro (`-1`).

## Ejercicios clave
- **Caso práctico**: ejecución de un script en tres modos distintos para comprobar el impacto del modo estricto en la declaración de variables.
- **Ponte a prueba**: implementación de una función robusta que captura errores al acceder a propiedades de objetos no definidos.

## Instalación y requisitos
No se necesita instalar ningún programa específico, bastará con tener:
- **Editor de código**: en mi caso VS Code.
- **Navegador web actualizado**: en mi caso Chrome.
- **Extensión Live Server (opcional)**: para ejecutar archivos HTML directamente en la pantalla del navegador con "Go Live".

## Visualización

**En navegador**:
1. Guarda los archivos `.html` y `.js` en la raíz del proyecto.
2. Abre el archivo `.html` con doble clic o desde un servidor local.
3. Observa el comportamiento del script en la consola del navegador (F12-->Consola).
4. Compara los resultados según el modo de ejecución (convencional, estricto, módulo).

## Prueba de Autoría
- Autor: **Mario Segura Abad**
- Fecha de realización: 01/11/2025