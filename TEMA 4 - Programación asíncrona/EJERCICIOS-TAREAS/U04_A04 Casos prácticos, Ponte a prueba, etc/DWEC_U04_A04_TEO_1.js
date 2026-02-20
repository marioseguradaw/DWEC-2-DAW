// Autor: Mario Segura Abad
// Fecha: 19/01/2026


// 4.3. Peticiones con fetch
var url1 = new URL("https://www.misitio.com/paginas/pagina1.php?id=123&name=name1");

console.log(url1.protocol); //'https:'
console.log(url1.host); //'www.misitio.com'
console.log(url1.pathname); //'paginas/pagina1.php'
console.log(url1.search); //'?id=123&name=name1'
console.log(url1.searchParams.get("id")); //'123'
console.log(url1.searchParams.get("name")); //'name1'

// Se añade un parámetro con caracteres no ASCII
url1.searchParams.append("nuevo", "canción navideña");

console.log(url1.search); // '?id=123&name=name1&nuevo=canci%C3%B3n+navide%C3%B1a'
console.log(url1.searchParams.get("nuevo")); // 'canción navideña'