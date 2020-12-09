var marlon = {
  nombre: "Marlon",
  apellido: "Lavanda",
  edad: 26,
  ingeniero: true,
  cocinero: false,
  cantante: false,
  guitarrista: false,
  judoka: true,
};

function imprimirProfesiones(persona) {
  console.log(`${persona.nombre} es:`);
  if (persona.ingeniero) {
    console.log("Ingeniero");
  }
  if (persona.cocinero) {
    console.log("Cocinero");
  }
  if (persona.cantante) {
    console.log("Cantante");
  }
  if (persona.guitarrista) {
    console.log("Guitarrista");
  }
  if (persona.judoka) {
    console.log("Judoka");
  }
}

var juan = {
  nombre: "Juan",
  apellido: "Gomez",
  edad: 13,
};

// imprimirProfesiones(marlon);
const MAYORIA_DE_EDAD = 18;

function esMayorDeEdad(persona) {
  return persona.edad >= MAYORIA_DE_EDAD;
}

// function mayorDeEdad(persona) {
//   if (persona.edad >= 18) {
//     console.log(`${persona.nombre} es mayor de edad`);
//   } else {
//     console.log(`${persona.nombre} es menor de edad`);
//   }
// }
function imprimirSiEsmayorDeEdad(persona) {
  if (esMayorDeEdad(persona)) {
    console.log(`${persona.nombre} es mayor de edad`);
  } else {
    console.log(`${persona.nombre} es menor de edad`);
  }
}

// mayorDeEdad(marlon);
