class Persona {
  constructor(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
  }
  saludar(fn) {
    // var { nombre, apellido } = this;
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);
    if (fn) {
      fn(this.nombre, this.apellido, false);
    }
  }
  soyAlto() {
    return this.altura > 1.8;
  }
}

class Desarrollador extends Persona {
  constructor(nombre, apellido, altura) {
    //se coloca super() para indicar los atributos que se quieren heredar de la clase Persona
    super(nombre, apellido, altura);
  }

  saludar(fn) {
    // var { nombre, apellido } = this;
    console.log(
      `Hola, me llamo ${this.nombre} ${this.apellido} y soy Desarrollador/a Web`
    );
    if (fn) {
      fn(this.nombre, this.apellido, true);
    }
  }
}

function responderSaludo(nombre, apellido, esDev) {
  console.log(`Buen día ${nombre} ${apellido}`);
  if (esDev) {
    console.log(`Ah, no sabía que eras desarrollador/a`);
  }
}

var marlon = new Persona("Marlon", "Lavanda", 1.9);
var andrea = new Desarrollador("Andrea", "Lavanda", 1.6);
var jordan = new Persona("Jordan", "Lavanda", 1.8);
var fanny = new Desarrollador("Fanny", "Romero", 1.5);

marlon.saludar();
andrea.saludar(responderSaludo);
jordan.saludar();
fanny.saludar(responderSaludo);
