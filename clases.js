//SE CREA ESTA FUNCIÓN PARA PODER REALIZAR LA HERENCIA DE UNA CLASE PADRE A UNA HIJA

// function heredaDe(prototipoHijo, prototipoPadre) {
//   var fn = function () {}; //declaración de una función vacía
//   fn.prototype = prototipoPadre.prototype;
//   prototipoHijo.prototype = new fn();
//   prototipoHijo.prototype.constructor = prototipoHijo;
// }

//Esto crea la clase persona y dentro de ella tiene el método constructor Persona
// function Persona(nombre, apellido, edad, altura) {
//   this.nombre = nombre;
//   this.apellido = apellido;
//   this.edad = edad;
//   this.altura = altura;
// }

//prototype crea la función saludar y lo agrega al prototipo persona
//Y devuelce un clg con el nombre y apellido
// Persona.prototype.saludar = function () {
//   console.log(
//     `Hola me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años`
//   );
// };

// persona.prototype.soyAlto = function () {
//   this.altura >= 1.8
//     ? console.log(`${this.nombre} es alto`)
//     : console.log(`${this.nombre} es bajita`);
// };

//EL .this NO FUNCIONA CON LAS ARROW FUNCTION PORQUE ESTE METODO LLAMA A .window
// Persona.prototype.soyAlto = function () {
//   return this.altura > 1.8;
// };

// function Desarrollador(nombre, apellido) {
//   this.nombre = nombre;
//   this.apellido = apellido;
// }S

// heredaDe(Desarrollador, Persona);

// Desarrollador.prototype.saludar = function () {
//   console.log(
//     `Hola, me llamo ${this.nombre} ${this.apellido} y soy Desarrollador/a Web`
//   );
// };

class Persona {
  constructor(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
  }
  saludar() {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);
  }
  soyAlto() {
    return this.altura > 1.8;
  }
}

// Persona.prototype.saludar = function () {};
// Persona.prototype.soyAlto = function () {};

//extends indica a JS que hereda los atributos de la clase persona
class Desarrollador extends Persona {
  constructor(nombre, apellido, altura) {
    //se coloca super() para indicar los atributos que se quieren heredar de la clase Persona
    super(nombre, apellido, altura);
  }
  //
  saludar() {
    console.log(
      `Hola, me llamo ${this.nombre} ${this.apellido} y soy Desarrollador/a Web`
    );
  }
}

// var marlon = new Persona("Marlon", "Lavanda", 1.9);
// var andrea = new persona("Andrea", "Lavanda", 19, 1.6);
// var jordan = new persona("Jordan", "Lavanda", 23, 1.8);
// var fanny = new persona("Fanny", "Romero", 59, 1.5);

// marlon.saludar();
