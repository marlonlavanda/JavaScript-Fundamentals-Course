const API_URL = "https://swapi.dev/api/";
const PEOPLE_URL = "people/:id";

//.replace() Reemplaza ":id" por 1 y consigue los datos del personaje 1 de la API
// {croosDomain: true} indica al método $get que el request se va a hacer de una url externa
// const lukeUrl = `${API_URL}${PEOPLE_URL.replace(":id", 3)}`;
// const opts = { crossDomain: true };
// const onPeopleResponse = function (person) {
//   console.log(`Hola yo soy ${person.name}`);
// };

// function obtenerPersonaje(id) {
//   const url = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;
//   $.get(url, opts, onPeopleResponse);
// }
//El callback es una función que se va a ejecutará después del request.
// $.get(lukeUrl, opts, onPeopleResponse);
// obtenerPersonaje(1);
// obtenerPersonaje(2);
// obtenerPersonaje(3);

//ORDEN Y ASINCRONISMO EN JS CON CALLBACKS

// const opts = { crossDomain: true };

// function obtenerPersonaje(id, callback) {
//   const url = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;
//   $.get(url, opts, function (persona) {
//     console.log(`Hola yo soy ${persona.name}`);
//     if (callback) {
//       callback();
//     }
//   });
// }

//Esto hace que los personajes se muesten siempren en orden
// obtenerPersonaje(1, function () {
//   obtenerPersonaje(2, function () {
//     obtenerPersonaje(3, function () {
//       obtenerPersonaje(4);
//     });
//   });
// });

//MANEJO DE ERRORES CON CALLBAKS
//para añadir un mensaje de error, se añade el método fail()
const opts = { crossDomain: true };

function obtenerPersonaje(id, callback) {
  const url = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;
  $.get(url, opts, callback).fail(function () {
    console.log(`Ocurrió un error, no se pudo obtener el personaje ${id}`);
  });
}

obtenerPersonaje(1, function (personaje) {
  console.log(`Hola yo soy ${personaje.name}`);

  obtenerPersonaje(2, function (personaje) {
    console.log(`Hola yo soy ${personaje.name}`);

    obtenerPersonaje(3, function (personaje) {
      console.log(`Hola yo soy ${personaje.name}`);

      obtenerPersonaje(4, function (personaje) {
        console.log(`Hola yo soy ${personaje.name}`);
      });
    });
  });
});
