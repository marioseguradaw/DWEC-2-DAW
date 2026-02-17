<!-- Autor: Mario Segura Abad -->
<!-- Fecha: 05/12/2025 -->

# Práctica DWEC - Unidad 3 Apartado 3

## Ejercicios clave
- **Caso práctico 3 - Envío y validación de formularios**
    - Se crea un formulario con tres campos: **nombre, apellidos y NIF/NIE**.
    - Todos los campos son obligatorios (validación HTML5 con `required`).
    - Se añade lógica en JavaScript para comprobar el NIF/NIE con el algoritmo (función `comprobarNifNie`).
    - Si el NIF/NIE es incorrecto --> se muestra un `alert` con error.
    - Si es correcto --> se permite el envío del formulario.
- **Ponte a prueba3 - Acceso a valores del formulario**
    - Se crea una función que muestra mediante `alert` el contenido de los campos del formulario al enviarse.
    - El formulario **no debe enviarse** (se usa `event.preventDefault()`).
    - Se accede a los valores de los campos a través de sus atributos `name`.
    - Se muestran los valores concatenados en un `alert`.

## Instalación y requisitos
No hace falta instalar nada como tal, bastará con tener:
- **Editor de código compatible**: en mi caso VS Code.
- **Navegador web actualizado**: en mi caso, el Chrome.
*(No es necesario Node.js, ni extensiones adicionales, todo se ejecuta directamente en la pantalla del navegador.)*

## Visualización

__Pasos:__
1. Guardar los archivos `.html` y `.js` en la raíz del proyecto.
2. Abrir el archivo `.html` en el navegador.
3. **Caso práctico 3**: rellenar el formulario y comprobar que la validación del NIF/NIE funcina (alert si es incorrecto, envío si es correcto).
4. **Ponte a prueba 3**: enviar el formulario y verificar que se muestran los valores en un `alert` sin que se envíe realmente.
5. Revisar la consola del navegador (F12 --> "Consola") para ver mensajes de prueba de autoría.

## Prueba de Autoría
- Autor: **Mario Segura Abad**
- Fecha de realización: 05/12/2025