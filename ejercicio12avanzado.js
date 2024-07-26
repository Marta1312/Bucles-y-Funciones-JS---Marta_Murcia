/* Desarrolla una función que busque en un array de objetos representando mutantes si existe alguno con un poder específico y retorne un mensaje indicando si fue encontrado o no.

Considera el caso de múltiples mutantes con el mismo poder. */

const mutants = [
  { name: "Wolverine", power: "regeneration" },
  { name: "Magneto", power: "magnetism" },
  { name: "Professor X", power: "telepathy" },
  { name: "Jean Grey", power: "telekinesis" },
  { name: "Rogue", power: "power absorption" },
  { name: "Storm", power: "weather manipulation" },
  { name: "Baby Born", power: "weather manipulation" },
  { name: "Baby Born", power: "weather manipulation" },
  { name: "Baby Born", power: "weather manipulation" },
  { name: "Mystique", power: "shape-shifting" },
  { name: "Beast", power: "superhuman strength" },
  { name: "Colossus", power: "steel skin" },
  { name: "Nightcrawler", power: "teleportation" },
];

function findMutantByPower(mutants, power) {
  let mutantesConElPoder = [];
  for (let mutant of mutants) {
    if (mutant.power === power) {
      mutantesConElPoder.push(mutant.name);
    }
  }

  if (mutantesConElPoder.length > 0) {
    return `Con el poder ${power} he encontrado los siguientes mutantes : ${mutantesConElPoder.join(
      " , "
    )}.`;
  } else {
    return `No hay ningun mutante con el poder de ${power}`;
  }
}

console.log(findMutantByPower(mutants, "weather manipulation"));
console.log(findMutantByPower(mutants, "comer chuches sin caries"));
