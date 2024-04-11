"use strict";
const phi = ([n00, n01, n10, n11]) => {
    return ((n11 * n00 - n10 * n01) /
        Math.sqrt((n10 + n11) * (n00 + n01) * (n01 + n11) * (n00 + n10)));
};
const journal = require("./journal.ts");
const tableFor = (event, journal) => {
    let table = [0, 0, 0, 0];
    for (let i = 0; i < journal.length; i++) {
        let entry = journal[i], index = 0;
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
const journalEvents = (journal) => {
    let events = [];
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
    if (entry.events.includes("peanuts") &&
        !entry.events.includes("brushed teeth")) {
        entry.events.push("peanut teeth");
    }
}
console.log(phi(tableFor("peanut teeth", journal)));
//# sourceMappingURL=wereSquirrel.js.map