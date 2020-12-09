var juan = {
  nombre: "Juan",
  apellido: "Gomez",
  edad: 23,
};

const MAYORIA_DE_EDAD = 18;

// var esMayorDeEdad = function (persona) {
//   return persona.edad >= MAYORIA_DE_EDAD;
// };

//Definición de una Arrow function
// const esMayorDeEdad = (persona) => {
//   return persona.edad >= MAYORIA_DE_EDAD;
// };
//JS permite borrar el return y las llaves si su única función es retornar algo

const esMayorDeEdad = (persona) => persona.edad >= MAYORIA_DE_EDAD;

function imprimirSiEsMayorDeEdad(persona) {
  if (esMayorDeEdad(persona)) {
    console.log(`${persona.nombre} es mayor de edad`);
  } else {
    console.log(`${persona.nombre} es menor de edad`);
  }
}

//1. FORMA NORMAL DE DECLARAR UNA FUNCIÓN
// function permitirAcceso(persona) {
//   if (!esMayorDeEdad(persona)) {
//     console.log("Acceso denegado");
//   } else {
//     console.log("Adelante, puedes pasar");
//   }
// }

//2. FORMA DE DECLARAR UNA ARROW FUNCTION
const permitirAcceso = ({ edad }) =>
  !esMayorDeEdad({ edad })
    ? console.log("Acceso denegado")
    : console.log("Adelante");
