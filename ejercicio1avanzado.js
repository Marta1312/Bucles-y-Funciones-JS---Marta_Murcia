const characters = [
  { name: "Luke Skywalker", species: "Human" },
  { name: "Darth Vader", species: "Human" },
  { name: "Chewbacca", species: "Wookiee" },
  { name: "Leia Organa", species: "Human" },
  { name: "R2-D2", species: "Droid" },
  { name: "C-3PO", species: "Droid" },
  { name: "Obi-Wan Kenobi", species: "Human" },
  { name: "Yoda", species: "Unknown" },
  { name: "Han Solo", species: "Human" },
];

const humanCharacters = [];
const otherCharacters = [];

function filterHuman(list) {
  let resultado = 0;
  for (const character of list) {
    if (character.species == "Human") {
      humanCharacters.push(character);
    } else {
      otherCharacters.push(character);
    }
  }
  console.log("Personajes de especie humana:", humanCharacters);
  /* console.log("Resto de personajes:", otherCharacters); */
}

filterHuman(characters);
