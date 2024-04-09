// console.log("lycanthropy");

// const dogg = "Dogg";

// console.log(typeof dogg.includes);

// console.log(typeof dogg.toUpperCase());

// let descriptions = {
//   work: "gotta workworking",
//   "smoke trees": "smoking trees?",
// };

// console.log(descriptions["smoke trees"]);

// let anObject: { left?: number; right: number } = { left: 1, right: 2 };
// console.log(anObject);

// delete anObject.left;

// console.log(anObject);
// console.log(anObject.left);
// console.log("left" in anObject);
// console.log("right" in anObject);

// const zettaObject = {
//   x: 23,
//   y: 96,
//   z: 666,
//   "zetta pointer": 7,
//   congruent: "local",
// };

// console.log(Object.keys(zettaObject));

// let objectA = { a: 2, b: 7 };
// console.log(objectA);
// Object.assign(objectA, { b: 30, z: "zetta", f: false });

// console.log(objectA);

// let journal: { events: string[]; squirrel: boolean }[] = [];

// const addEntry = (
//   events: string[],
//   squirrel: boolean
// ): { events: string[]; squirrel: boolean }[] => {
//   journal.push({ events, squirrel });
//   return journal;
// };

// addEntry(["work", "touched tree", "pizza", "running", "television"], false);
// addEntry(
//   [
//     "work",
//     "ice cream",
//     "cauliflower",
//     "lasagna",
//     "touched tree",
//     "brushed teeth",
//   ],
//   false
// );
// addEntry(["weekend", "cycling", "break", "peanuts", "beer"], true);
// console.log(journal);

// const array = [76, 9, 4, 1];

const phi = (table: number[]) => {
  return (
    (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt(
      (table[2] + table[3]) *
        (table[0] + table[1]) *
        (table[1] + table[3]) *
        (table[0] + table[2])
    )
  );
};

// console.log(phi(array));

type Journal = { events: string[]; squirrel: boolean }[];

const journal: Journal = require("./journal.ts");

const tableFor = (event: string, journal: Journal) => {
  let table = [0, 0, 0, 0];
  for (let i = 0; i < journal.length; i++) {
    let entry = journal[i],
      index = 0;
    if (entry.events.includes(event)) {
      index++;
    }
    if (entry.squirrel) {
      index++, index++;
    }

    table[index]++;
  }
  return table;
};

console.log(tableFor("pizza", journal));

const journalEvents = (journal: Journal) => {
  let events: string[] = [];
  for (let entry of journal) {
    for (let event of entry.events) {
      if (!events.includes(event)) {
        events.push(event);
      }
    }
  }
  return events;
};

console.log(journalEvents(journal));

for (let event of journalEvents(journal)) {
  console.log(event + ":", phi(tableFor(event, journal)));
}

for (let entry of journal) {
  if (
    entry.events.includes("peanuts") &&
    !entry.events.includes("brushed teeth")
  ) {
    entry.events.push("peanut teeth");
  }
}
console.log(phi(tableFor("peanut teeth", journal)));
