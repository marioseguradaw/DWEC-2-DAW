<!-- Autor: Mario Segura Abad -->
<!-- Fecha: 25/11/2025 -->

# Práctica DWEC - Unidad 3  Apartado 4

## Ejercicios clave
- **Caso práctico 4 - Objetos manejadores de eventos: versión 2**
    - Se repite el ejercicio de los chistes, pero ahora usando **componentes web personalizados**.
    - Se crea un elemento `<mi-chiste>` que encapsula:
        - El enunciado del chiste.
        - Un botón **Ver respuesta** que, al pulsarlo, muestra la respuesta con `alert`.
    - Se utiliza una **plantilla HTML** y el **Shadow DOM** para aislar la estructura y estilos.
    - Los datos del chiste se pasan como propiedad al componente en el momento de su creación.
- **Ponte a prueba 4 - Contador con valor de inicio personalizado**
    - Se modifica el compoonente `<mi-contador>` para aceptar un atributo `iniciar`.
    - En el `connectedCallback`, se obtiene el valor con `getAttribute("iniciar")`.
    - Si el atributo no está definido, el contador comienza en 0.

## Instalación y requisitos
No hace falta instalar absolutamente nada como tal, bastará con tener:
- **Editor de código compatible**: en mi caso VS Code.
- **Navegador web actualizado**: en mi caso, el Chrome (este soporta componentes web y Shadow DOM).

## Visualización

**En navegador**:
1. Guardar los archivos `.html` y `.js` en la misma carpeta.
2. Abrir el archivo `.html` con doble click.
3. **Caso práctico 4**: comprobar que cada chiste aparece como un compoonente `<mi-chiste>` y que al pulsar el botón se muestra la respuesta.
4. **Ponte a prueba 4**: insertar varios `<mi-contador>` en el HTML y verificar que cada uno inicia en el valor indicado por su atributo.
5. Revisar la consola del navegador (F12 --> Consola) para verificar mensajes de prueba de autoría.

## Prueba de Autoría
- Autor: **Mario Segura Abad**
- Fecha de realización: 25/11/2025