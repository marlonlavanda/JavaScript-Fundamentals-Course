//Una promesa es un valor que aún no conocemos. Es la promesa de que habrá un valor cuando una acción asíncrona suceda y se resuelva
//La pronesas tienen 3 estados:
//1.Estado de pending: Es el estado en el que se inicializa una promesa.
//2.Estado de fulfilled: Es cuando la promesa se resuelve exitosamente. -> .then(val=>)
//3.Estado de rejected: Cuando ocurre un error. -> .catch(err=>)

const API_URL = "https://swapi.dev/api/";
const PEOPLE_URL = "people/:id";

const opts = { crossDomain: true };

//Declaración de una promesa
// new Promise(function(resolve, rejected){
//})
//Cuando se declara una promesa, se les pasa una funcion que lleva dos parámetros. Las funciones resolve y rejected. resolve es llamada si la función se resulve exitosamente pero si ocurre un error se llama al función rejected.

//Esta función devulve una promesa directamente
// function obtenerPersonaje(id) {
//   return new Promise((resolve, rejected) => {
//     const url = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;
//     $.get(url, opts, function (data) {
//       resolve(data);
//     }).fail(() => rejected(id));
//   });
// }

// function onError(id) {
//   console.log(`Sucedió un error al obtener el personaje ${id}`);
// }

// obtenerPersonaje(1)
//   .then(function (personaje) {
//     console.log(`El personaje 1 es ${personaje.name}`);
//   })
//   .catch(onError);

//PROMESAS ENCADENADAS EN SERIE

// obtenerPersonaje(1)
//   .then(function (personaje) {
//     console.log(`El personaje 1 es ${personaje.name}`);
//     return obtenerPersonaje(2);
//   })
//   .then(function (personaje) {
//     console.log(`El personaje 2 es ${personaje.name}`);
//     return obtenerPersonaje(3);
//   })
//   .then(function (personaje) {
//     console.log(`El personaje 3 es ${personaje.name}`);
//     return obtenerPersonaje(4);
//   })
//   .catch(onError);

//MÚLTIPLES PROMESAS EN PARALELO

// function obtenerPersonaje(id) {
//   return new Promise((resolve, rejected) => {
//     const url = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;
//     $.get(url, opts, function (data) {
//       resolve(data);
//     }).fail(() => rejected(id));
//   });
// }

// function onError(id) {
//   console.log(`Sucedió un error al obtener el personaje ${id}`);
// }

// var ids = [1, 2, 3, 4, 5, 6, 7];

// var promesas = ids.map(function (id) {
//   return obtenerPersonaje(id);
// });

//Expresado en  arrow functions
// var promesas = ids.map((id) => obtenerPersonaje(id));

// Promise.all(promesas)
//   .then((personajes) => console.log(personajes))
//   .catch(onerror);

// PROMESAS EN PARALELO CON ASYNC-AWAIT

function obtenerPersonaje(id) {
  return new Promise((resolve, rejected) => {
    const url = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;
    $.get(url, opts, function (data) {
      resolve(data);
    }).fail(() => rejected(id));
  });
}

function onError(id) {
  console.log(`Sucedió un error al obtener el personaje ${id}`);
}

async function obtenerPersonajes() {
  var ids = [1, 2, 3, 4, 5, 6, 7];
  var promesas = ids.map((id) => obtenerPersonaje(id));
  try {
    var personajes = await Promise.all(promesas);
    console.log(personajes);
  } catch (id) {
    onError(id);
  }
}

obtenerPersonajes();
