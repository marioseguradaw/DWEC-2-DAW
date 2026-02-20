<!-- Autor: Mario Segura Abad -->
<!-- Fecha: 16/02/2026 -->

# Práctica DWEC - Unidad 5 Apartado 1

## Ejercicios clave
- **Caso práctico 1 - Proyecto Webpack con Chart.js**
El objetivo es crear un proyecto configurado con __Webpack__ que cargue la librería __Chart.js__ y muestre una grafica de ejemplo.<br>
El proyecto debe:
- Instalar Webpack y Webpack CLI como dependencias de desarrollo.
- Instalar Chart.js como dependencia del proyecto.
- Importar Chart.js desde el archivo principal del bundle.
- Incluir en el HTML el contenedor con el `<canvas id="grafica"></canvas>`.
- Usar el código proporcionado (DWEC_U05_A01_CP_E.js) para generar una gráfica de barras.

- **Ponte a prueba 1 - Minificación de CSS con Gulp**
El objetivo es crear un proyecto NodeJS con dos archivos CSS y configurar __Gulp__ para minificarlos automáticamente.<br>
El proyecto debe:
- Instalar como dependencias de desarrollo:
    - `gulp`
    - `gulp-clean-css`
- Crear un archivo `gulpfile.js` con una tarea que:
    - Lea los archivos CSS del directorio raíz.
    - Los minifique.
    - Los guarde en una carpeta `dist/`.

## Instalación y requisitos

**Programas necesarios**
- **Node.js** (obligatorio para Webpack y Gulp).
- **Visual Studio Code** (recomendado).
- **Navegador web actualizado**: en mi caso, el Chrome.

**Dependencias principales**
- Para Webpack --> `npm install --save-dev webpack webpack-cli` | `npm install chart.js`
- Para Gulp --> `npm install --save-dev gulp gulp-clean-css`

## Como visualizarlo

**Caso práctico 1 - Webpack + Chart.js**
1. Crear el proyecto con `npm init`.
2. Instalar Webpack y Chart.js.
3. Configurar `webpack.config.js`.
4. Importar Chart.js en el archivo principal.
5. Ejecutar Webapck.
6. Abrir el HTML en el navegador
7. Ver la grafica renderizada en el `<canvas id="grafica"></canvas>`.
8. Revisar la consola para ver mensajes de autoría.

**Ponte a prueba 1 - Gulp + minificación CSS**
1. Crear dos archivos CSS en el directorio raíz.
2. Crear `gulpfile.js` con la tarea de minificación.
3. Ejecutar la tarea --> `npx gulp NOMBRE_TAREA`.
4. Verificar que se cree la carpeta `dist/` con los CSS minificados.
5. Revisar la consola para ver mensajes de autoria.

## Autoría
- Autor: __Mario Segura Abad__
- Fecha de realización: 16/02/2026