// Autor: Mario Segura Abad
// Fecha: 16/10/2025


// 4.2. Import y export

// Fichero principal.js

// Importación de las funciones exportadas por el módulo
// Mediante esta sintaxis se pueden indicar las funciones que se deseen importar,
// que no tienen por qué ser todas
import { saludar, despedir } from './miLibreria';

// A partir de aquí se pueden utilizar las funciones importadas, 'saludar' y 'despedir'
saludar("Juan"); // Hola, Juan
despedir(); // "Ssssshh... es un secreto..."
        // Adiós, Juan

// Fichero principal.js

import * as miLibreria from './miLibreria.js';
// El objeto 'miLibreria' tiene definidas todas las funciones exportadas por la librería

miLibreria.saludar("Juan"); // Hola, Juan
miLibreria.despedir(); // Ssssshh... es un secreto...
                // Adios, Juan