<!-- Autor: Mario Segura Abad -->
<!-- Fecha: 02/02/2026 -->

# Práctica DWEC - Apartado 4 Unidad 4

## Ejercicios clave
**Caso práctico 4 - Trabajo con una API de servidor (GitHub)**
- El objetivo es crear una página con un formulario donde el usuario introduce un __nombre de usuario de GitHub__.
- La página debe mostrar:
    - El __login__ de usuario.
    Su __avatar__ (`avatar_url`).
- Se usa la API pública de GitHub:<br>
`https://api.github.com/users/{USER}`
- Si el usuario no existe (error 404), se debe mostrar un mensaje indicándolo.
- La API sin autenticar solo permite __60 peticiones por hora__, así que hay que evitar recargar la página continuamente.

**Ponte a prueba 4 - Descarga de datos con tiempo máximo de espera**
- Se debe realizar una petición GET a un __archivo JSON local__ que contiene un listado de usuarios.
- La petición debe __cancelarse automáticamente__ si tarda más de 5 segundos.
- Si la petición tiene éxito, se muestran los usuarios en consola con el formato:
    - `Usuario: Pérez, Laura.`
    - `Usuario: Martínez, Ana.`
    - `Usuario: González, Juan.`
- Se utiliza:
    - `fetch()` para la petición.
    - `AbortController` para poder cancelar la petición.
    - `setTimeout()` para activar el aborto a los segundos.

## Instalación y requisitos
**Programas necesarios**
- __Visual Studio Code__ (recomendado).
- __Navegador moderno__: Chrome, Firefox, Edge.
- __Extensión obligatoria para el Ponte a prueba 4:__
    - __Live Server__ (VS Code), para servir el archivo JSON desde un servidor local.
*(El Caso práctico 4 puede funcionar sin Live Server, pero es recomendable usarlo igualmente)*

## Cómo visualizarlo
**Caso práctico 4 - GitHub API**
1. Guardar `.html` y `.js` en la misma carpeta.
2. Abrir la carpeta en VS Code.
3. Ejecutar con __Live Server__ (opcional).
4. Introducir un nombre de usuario de GitHub en el formulario.
5. Ver en pantalla:
    - Login.
    - Avatar.
    - O mensaje de "usuario no encontrado".
6. Revisar la consola (F12 --> "Consola") para ver mensajes de autoría.

**Ponte a prueba 4 - JSON con tiempo máximo de espera**
1. Crear una carpeta con:
    - El archivo HTML.
    - El archivo JS.
    - El archivo JSON proporcionado (`DWEC_U04_A04_PP_E.json`).
2. Abrir la carpeta en VS Code.
3. Ejecutar con __Live Server__.
4. Observar en consola:
    - Listado formateado si la petición es rápida.
    - Mensajes de cancelación si supera 5 segundos.
5. Verificar también los mensajes de autoría.

## Prueba de Autoría
- Autor: **Mario Segura Abad**
- Fecha de realización: 02/02/2026