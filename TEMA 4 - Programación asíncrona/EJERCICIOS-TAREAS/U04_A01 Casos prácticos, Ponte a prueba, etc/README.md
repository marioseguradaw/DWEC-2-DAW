<!-- Autor: Mario Segura Abad -->
<!-- Fecha: 11/12/2025 -->

# Practica DWEC - Unidad 4 Apartado 1

## Ejercicios clave
- **Caso práctico 1 - Cronómetrom sencillito**
    - Se usa `setInterval` para ejecutaar una función cada segundo.
    - El cronómetro muestra los segundos transcurridos en la página.
    - Se añaden dos botones:
        - **Inicio/Parada -->** activa o detiene el intervalo con `clearInterval`.
        - **Puesta a cero -->** reinicia el contador a 0.
    - Refuerza el uso de temporizadores periódicos y su control desde la interfaz.
- **Ponte a prueba 1 - Errores en callbacks**
    - El código inicial no funciona porque `this` en una función lambda no apunta al objeto `temporizador`.
    - Solución: definir `cuentaAtras` como función normal o capturar `this` en una variable.
    - Refuerza la comprensión de cómo funciona `this` en funciones normales vs lambda.

## Instalación y requisitos
No hace falta instalara nada en especial:
- **Editor de código compatible**: en mi caso VS Code.
- **Navegador web actualizado**: en mi caso, el Chrome.
- (Opcional) **Node.js** si quieres ejecutar los scripts directamente en consola.

## Visualización

**Pasos:**
1. Guardar los archivos `.html` y `.js` en la raíz del proyecto.
2. Abrir el `.html` en el navegador.
3. **Caso práctico 1:** comprobar que el cronómetro inicia, se detiene y se pone a cero correctamente.
4. **Ponte a prueba 1:** ejecutar el script y verificar que el mensaje aparece tras el tiempo indicado.
5. Revisar la consola del navegador (F12 -> "Consola") paara ver los mensajes de prueba de autoría.

## Prueba de Autoría
- Autor: __Mario Segura Abad__
- Fecha de realización: 11/12/2025