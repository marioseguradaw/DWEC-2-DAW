// Autor: Mario Segura Abad
// Fecha: 08/10/2025


// Se define una clase base llamada 'Usuario'
class Usuario {
	// El constructor se ejecuta cuando se crea un objeto nuevo con 'newUsuario(...)'
    constructor(nombre, apellidos) {
		// Se inicializan lass propiedades 'nombre' y 'apellidos' del nuevo objeto
		this.nombre = nombre;
		this.apellidos = apellidos;
    }

	// Método 'saludar' definido en 'Usuario.prototype'
	// No pertenece a cada objeto directamente, sino al prototipo
    saludar() {
		console.log(`Me llamo ${this.nombre} ${this.apellidos}`);
    }
}

// Se define una nueva clase 'UsuarioEspecial' que hereda de 'Usuario'
class UsuarioEspecial extends Usuario {

    // Se define un nuevo constructor que amplía el de la clase padre
	// Añadiendo un tercer parámetro: 'edad'
    constructor(nombre, apellidos, edad) {

		// Se llama al constructor de la clase padre ('Usuario') mediante 'super'
		// Es OBLIGATORIO hacerlo antes de usar 'this' en una clase que hereda
		// Esto inicializa las propiedades 'nombre' y 'apellidos' en el nuevo objeto
		super(nombre,apellidos)

		// Se añade una nueva propiedad específica de 'UsuarioEspecial'
		this.edad = edad;
    }

    // Se sobreescribe (reescribe) el método 'saludar' de la clase padre
    saludar() {
		// Se llama al método 'saludar' original de la clase padre usando 'super'
		// Esto ejecuta: console.log(`Me llamo ${this.nombre} ${this.apellidos}`);
		super.saludar();

		// Después, se añade funcionalidaad adicional en esta versión del método
		console.log(`Y tengo ${this.edad} años`);
    }
}

// Se crea un objeto de la clasae 'UsuarioEspecial'
let usuario = new UsuarioEspecial("David", "Pérez", 35);

// Al ejecutar 'usuario.saludar()', JavaScript hace lo siguiente:
//
// 1. Busca el método 'saludar' en el propio objeto ('usuario') -> no existe ahí.
// 2. Lo busca en su prototipo ('UsuarioEspecial.prototype') -> lo encuentra.
// 3. Dentro del método, se ejecuta primero 'super.saludar()', que llama
//		al método 'saludar' de 'Usuario.prototype'.
// 4. Luego ejecuta la segunda línea: console.log(`Y tengo ${this.edad} años`);
//
// Resultado final en consola:
usuario.saludar(); // Me llamo David Pérez
// Y tengo 35 años