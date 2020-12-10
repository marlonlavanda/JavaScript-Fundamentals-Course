var marlon = {
  nombre: "Marlon",
  apellido: "Lavanda",
  altura: 1.85,
};
var jordan = {
  nombre: "Jordan",
  apellido: "Lavanda",
  altura: 1.57,
};
var andrea = {
  nombre: "Andrea",
  apellido: "Lavanda",
  altura: 1.57,
};
var fanny = {
  nombre: "Fanny",
  apellido: "Romero",
  altura: 1.5,
};

var personas = [marlon, jordan, andrea, fanny];

// for (var i = 0; i < personas.length; i++) {
//   var persona = personas[i];
//   console.log(`${persona.nombre} mide ${persona.altura}mts`);
// }

//FILTRACIÓN DE ELEMENTOS DE UN ARRAYS

const esAlta = (persona) => persona.altura > 1.8;
const esBaja = (persona) => persona.altura < 1.7;

// var personasAltas = personas.filter(esAlta);
var personasBajas = personas.filter(esBaja);
// var personasAltas = personas.filter(function(persona)) {
//   return persona.altura > 1.8;
// }

// console.log(personasAltas);
// console.log(personasBajas);

//TRANSFORMAR UN ARRAY

const pasarAlturaACms = (persona) => {
  //esto devuelve la altura de cada persona en cms pero no modifica la altura del objeto personas
  return {
    ...persona,
    altura: persona.altura * 100,
  };
};

//el método .map() itera sobre los elementos de un array en el orden de inserción y devuelve un array nuevo con los elementos modificados
var personasCms = personas.map(pasarAlturaACms);
console.log(personasCms);
