"use strict";
const juanFlatten = (array) => {
    let flatten = [];
    flatten = array.reduce((a, b) => a.concat(b));
    return flatten;
};
console.log(juanFlatten([[1, 2, 3], [4, 5], [6]]));
//# sourceMappingURL=e1.js.map