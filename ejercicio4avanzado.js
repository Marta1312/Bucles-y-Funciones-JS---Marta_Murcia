const cartoons = [
  { name: "Mickey Mouse", debut: 1928 },
  { name: "Bugs Bunny", debut: 1938 },
  { name: "SpongeBob SquarePants", debut: 1999 },
  { name: "Tom and Jerry", debut: 1940 },
  { name: "Scooby-Doo", debut: 1969 },
  { name: "The Flintstones", debut: 1960 },
  { name: "Fulanito De Tal", debut: 50 },
  { name: "Batman: The Animated Series", debut: 1992 },
  { name: "The Simpsons", debut: 1989 },
  { name: "Pokémon", debut: 1997 },
  { name: "Dexter's Laboratory", debut: 1996 },
];

/* let theOldestCartoon = 0;
function searchingOldestCartoon(listOfCartoons) {
  for (let i = 0; i < cartoons.length; i++) {
    if (cartoons[i].debut > theOldestCartoon) {
      theOldestCartoon = cartoons[i];
    }
  }
  console.log(theOldestCartoon);
}
searchingOldestCartoon(cartoons); */

let theOldestCartoon =
  cartoons[0]; /* INICIALIZAMOS EN LA PRIMERA DE LAS OPCIONES, NO TIENE NINGUN SENTIDO INICIALIZARLO EN 0 */

function searchingOldestCartoon(listOfCartoons) {
  for (let i = 0; i < cartoons.length; i++) {
    if (cartoons[i].debut < theOldestCartoon.debut) {
      /* SI CARTOONS.DEBUT ES MENOR QUE EL QUE TENEMOS GUARDADO EN THEOLDESTCARTOON, ESTE PASARÁ A SER EL MÁS ANTIGUO */
      theOldestCartoon = cartoons[i];
    }
  }
  console.log(theOldestCartoon);
}

searchingOldestCartoon(cartoons);
