var marlon = {
  nombre: "Marlon",
  apellido: "Lavanda",
  edad: 26,
  peso: 75,
};

console.log(`Al inicio del año ${marlon.nombre} pesa ${marlon.peso}kg`);

const INCREMENTO_PESO = 0.2;
const DIAS_DEL_ANO = 365;

const aumentaDePeso = (persona) => {
  return (persona.peso += INCREMENTO_PESO);
};

const adelgazar = (persona) => {
  return (persona.peso -= INCREMENTO_PESO);
};

for (var i = 1; i <= DIAS_DEL_ANO; i++) {
  var random = Math.random();

  if (random < 0.25) {
    aumentaDePeso(marlon);
  } else if (random < 0.5) {
    adelgazar(marlon);
  }
}

//el método .toFixed(2) hace que el número se reduzca a dos decimáles
console.log(
  `Al final del año ${marlon.nombre} pesa ${marlon.peso.toFixed(2)}kg`
);
