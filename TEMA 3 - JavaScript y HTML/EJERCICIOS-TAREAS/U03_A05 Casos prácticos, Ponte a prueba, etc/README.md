<!-- Autor: Mario Segura Abad -->
<!-- Fecha: 30/11/2025 -->

# Práctica DWEC - Unidad 3 Apartado 5

## Ejercicios clave
- **Caso práctico 5 - Filtrado de datos con expresiones regulares**
    - Se crea una función que recibe una cadena con etiquetas separadas por distintos símbolos (coma, punto, dos puntos, punto y coma, espacios, etc.).
    - Devuelve un array con las etiquetas presentes, formadas únicamente por caracteres alfanuméricos.
    - Se utiliza la expresión regular `[A-Za-z0-9]` con flag `g` para extraerlas.
    - Ejemplo:
        - Entrada: `"web, backend; api: seguridad php7.node"`
        - Salida: `["web", "backend", "api", "seguridad", "php7", "node"]`
- **Ponte a prueba 5 - Validación de un documento de identidad**
    - Documento ficticio de 10 caracteres con reglas:
        1. Carácter 1: número 0-9 o letra A/B/C.
        2. Caracteres 2-8: números 0-9.
        3. Carácter 9: letra X/Y/Z.
        4. Carácter 10: número 1-5.
    - Expresión regular:
    `^([0-9]|[A-Ca-c])[0-9]{7}([X-Zx-z])[1-5]$`
    - Ejemplos válidos: `A1234567Z3`, `72345678y5`, `c0000000x1`.
    - Ejemplos no válidos: `D1234567Z3`, `A123456Z3`, `A1234567Q3`, `A1234567Z0`, `A1234567Z6`.

## Instalación y requisitos
No hace falta instalar nada como tal, bastará con tener:
- **Editor de código compatible**: en mi caso VS Code.
- **Navegador web actualizado**: en mi caso, el Chrome.

## Visualización

**En navegador**
1. Guarda los archivos `.js` en la carpeta raíz del proyecto.
2. Crear un `.html` sencillo que cargue el script.
3. Abrir el `.html` en el navegador.
4. Revisar la consola (F12 --> Consola) para ver los resultados de dichas pruebas.

**En la consola del navegador**
1. Abrir el navegador por defecto que se utilice.
2. Copiar el código y pegarlo en la consola del navegador
3. VVerificar en la misma consola que la función de etiquetas devuelve el array esperado y que la expresión regular valida correctamente los ejemplos.

## Prueba de Autoría
- Autor: **Mario Segura Abad**
- Fecha de realización: 30/11/2025