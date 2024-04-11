"use strict";
const every = (numArray, test) => {
    for (let i = 0; i < numArray.length; i++) {
        const trueOrFalse = test(numArray[i]);
        if (trueOrFalse === false) {
            return false;
        }
    }
    return true;
};
console.log("every1");
console.log(every([1, 3, 5], (n) => n < 10));
console.log(every([2, 4, 16], (n) => n < 10));
console.log(every([], (n) => n < 10));
const every2 = (numArray, test) => {
    return !numArray.some((element) => !test(element));
};
console.log("\nevery2");
console.log(every2([1, 3, 5], (n) => n < 10));
console.log(every2([2, 4, 16], (n) => n < 10));
console.log(every2([], (n) => n < 10));
//# sourceMappingURL=e3.js.map