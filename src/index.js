import harryPotterCharacters from "./hp.json" assert { type: "json" };

const people = [
  "Mohammed",
  "Randolph",
  "Douglas",
  "Jerome",
  "Lavern",
  "Kendall",
];

people.forEach((person) => {
  //console.log(person);
});
// find, filter, map, reduce

const search = "Michel";
let result = -1;
// find person in array
for (let i = 0; i < people.length; i++) {
  const person = people[i];
  if (person === search) {
    result = i;
  }
}
//console.log(result);

// predicate
const found = people.find((person) => person === search);
// console.log(found);

// forEach : parcourir chaque élément d'un tableau (ne créé pas un nouveau tableau)

// map : modifier chaque élément d'un tableau, obtenir le résultat dans un nouveau tableau
const numbers = [4, 1, 8, 14];

const resultMap = [];
for (const value of numbers) {
  const transform = value * 2;
  resultMap.push(transform);
}
//console.table(resultMap);

const newArray = numbers.map((value) => value * 2);

//console.table(newArray);

const characterNames = harryPotterCharacters.map((character) => {
  return character.name;
});

// console.table(characterNames);

// que les sorciers Hufflepuff

const finalList = harryPotterCharacters
  .filter((character) => character.wizard && character.house === "Hufflepuff")
  .map((character) => character.name);
//console.log(finalList);

// reduce : prend un tableau et ça le réduit à un seul élément
const ageList = [4, 1, 8, 14];

const total = ageList.reduce((acc, currentValue) => {
  return acc + currentValue;
});
//console.log(total);

const countWizards = harryPotterCharacters.reduce(
  (acc, character) => (character.wizard ? acc + 1 : acc),
  0
);
console.log(countWizards);

Object.defineProperty(Array.prototype, "tacos", {
  value: function () {
    return this.map((value) => value + "tacos");
  },
});

const stuff = ["azef", "oijopj", "oiuh"];
console.log(stuff.tacos());
