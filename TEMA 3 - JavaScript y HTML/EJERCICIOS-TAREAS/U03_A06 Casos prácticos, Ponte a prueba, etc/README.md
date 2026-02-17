<!-- Autor: Mario Segura Abad -->
<!-- Fecha: 02/12/2025 -->

# Práctica DWEC - Unidad 3 Apartado 6

## Ejercicios clave
- **Caso práctico 6 - Almacenamiento de objetos en LocalStorage**
    - Se crean tres objetos `coche` a partir de un constructor.
    - Se almacenan en un array y se guardan en LocalStorage bajo la clave `coches`.
    - Se recupera la lista de objetos desde LocalStorage.
    - Se reconstruye unaa nueva lista de objetos funcionales que mantienen su métodos (ej. `arrancar`).
    - Clave: al guradar se usa `JSON.stringify`, y al recuperar `JSON.parse`, reconstruyendo con el constructor.
- **Ponte a prueba 6 - Preferencias de usuario**
    - Se crea una página que carga la preferencia de idioma desde LocalStorage (clave `idioma`).
    - Se muestra un formulario para cambiar el idioma.
    - Al enviar el formulario, se guarda la nueva preferencia en LocalStorage.
    - Si no existe preferencia, el idioma por defecto es **castellano**.
    - Se manejan dos eventos: `DOMContentLoaded` (carga inicial) y `submit` (guardar preferencia evitando recarga).

## Instalación y requisitos
No hace falta instalar nada como tal, bastará con tener:
- **Editor de código compatible**: en mi caso VS Code.
- **Navegador web actualizado**: en mi caso, el Chrome.
*(No es necesaro Node.js ni extensiones adicionales, ya que LocalStorage es propio del navegador.)*

## Visualización

**En navegador**:
1. Guardar los archivos `.html` y `.js` en la raíz del proyecto.
2. Abrir los archivos `.html` mediante la extensión Go Live para ver el resultado directamente en la pantalla del navegador.
3. **Caso práctico 6**: comprobar en consola que los objetos `coche` se almacenan y se recuperan correctamente, y que pueden ejecutar el método `arrancar`.
4. **Ponte a prueba 6**: abrir la página, verificar que el idioma se carga desde LocalStorage y que el formulario permite cambiarlo.

## Prueba de Autoría
- Autor: **Mario Segura Abad**
- Fecha de realización: 02/12/2025