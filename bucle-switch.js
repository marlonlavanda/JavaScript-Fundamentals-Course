var signo = prompt("¿Cuál es tu signo?");

switch (signo) {
  case "acuario":
    console.log(
      "Los Acuario son tímidos y callados, pero al mismo tiempo, pueden ser excéntricos y enérgicos. Sin embargo, en ambos casos, son pensadores y muy intelectuales, y aman ayudar a otros. Son capaces de ver las dos caras de una situación sin prejuicios, lo cual les permite resolver problemas."
    );
    break;
  case "piscis":
    console.log(
      "Los Piscis son muy amistosos, así que siempre los encontrarás en compañía de gente diferente. Los Piscis son abnegados, siempre tienen la disposición de ayudar a los demás, sin esperar recibir nada a cambio"
    );
    break;
  case "aries":
    console.log(
      "Las personas que nacen bajo el signo de Aries, tienen como misión la búsqueda de respuestas a cuestiones personales y metafísicas. Esta es la característica más notable de esta encarnación.."
    );
    break;
  case "tauro":
    console.log(
      "Poderoso y confiable. Tauro es el primero cuando se trata de cosechar los frutos de su labor. Aman todo lo que sea bueno y hermoso y suelen rodearse de placeres materiales. Las personas nacidas bajo el signo de Tauro son muy sensuales y tienen un tacto mu agudo."
    );
    break;
  case "geminis":
    console.log(
      " Como un signo de aire, a Géminis le preocupan todos los aspectos de la mente. Este signo zodiacal es regido por Mercurio, el planeta de la comunicación, de la escritura y de la enseñanza"
    );
    break;
  case "escorpio":
    console.log(
      "Los nacidos bajo el signo de Escorpio son personas apasionadas y asertivas. Son determinados y decisivos, e investigarán hasta encontrar la verdad. Escorpio es un gran líder, siempre al tanto de la situación y con un prominente ingenio. Escorpio es un signo de Agua, y vive para experimentar y expresar sus emociones, A pesar de que las emociones son sumamente importantes para Escorpio, las manifiestan de manera distinta en comparación con el resto de los signos de Agua. En cualquier caso, puedes estar seguro de que Escorpio guardará tus secretos, cualesquiera que sean."
    );
    break;
  default:
    console.log("No encontramos tu signo");
    break;
}
