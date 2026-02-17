// Autor: Mario Segura Abad
// Fecha: 07/02/2026

const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');

// Tareas para minificar CSS
function minificarCSS() {
    return gulp.src('*.css')        // Lee todos los CSSS de la raíz
        .pipe(cleanCSS())           // Los minifica
        .pipe(gulp.dest('dist'));   // Los guarda en /dist
}

// Exportar tarea
exports.minificar = minificarCSS;