// Autor: Mario Segura Abad
// Fecha: 25/11/2025

var cadena1 = "Hola mundo! Hola de nuevo! Probaremos diferentes cadenas,"
"como AAbCC o rrXbCC o i98AA34bCC";

/hola/ . test(cadena1); // false
/hola/i . test(cadena1); // true (bandera 'i')

cadena1.replace(/Hola/, "Hello"); // 'Hello mundo! Hola de nuevo! ...'
cadena1.replace(/Hola/g, "Hello"); // 'Hello mundo! Hello de nuevo! ...'

cadena1.match(/bCC/); // Array cuya primera posición es 'bCC'
cadena1.match(/bCC/g); // [ 'bCC', 'bCC', 'bCC' ]

cadena1.match(/\w*!/); // Array cuya primera posición es 'mundo!'
cadena1.match(/\w*!/g); // [ 'mundo!', 'nuevo!' ]

cadena1.match(/\w*bCC/); // Array cuya primera posición es 'AAbCC'
cadena1.match(/\w*bCC/g); // [ 'AAbCC', 'rrXbCC', 'i98AA34bCC' ]
cadena1.replace(/\w*bCC/g, "c"); // 'Hola mundo! Hola de nuevo! Probaremos diferentes cadenas, como c o c o c'