var marlon = {
  nombre: "Marlon",
  apellido: "Lavanda",
  edad: 26,
  peso: 75,
};

console.log(`Al inicio del año ${marlon.nombre} pesa ${marlon.peso}kg`);

const INCREMENTO_PESO = 0.2;
const DIAS_DEL_ANO = 365;

const aumentaDePeso = (persona) => (persona.peso += INCREMENTO_PESO);
const adelgazar = (persona) => (persona.peso -= INCREMENTO_PESO);

const comeMucho = () => Math.random() < 0.3;
const realizaDeporte = () => Math.random() < 0.4;

const META = marlon.peso - 3;
var dias = 0;

while (marlon.peso > META) {
  if (comeMucho()) {
    aumentaDePeso(marlon);
  }
  if (realizaDeporte()) {
    adelgazar(marlon);
  }
  dias += 1;
}

//el método .toFixed(2) hace que el número se reduzca a dos decimáles
console.log(`Pasaron  ${dias} días hasta que ${marlon.nombre} adelgazó 3kg`);
