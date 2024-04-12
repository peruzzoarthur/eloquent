const juanFlatten = (array) => {
    let flatten = [];
    flatten = array.reduce((a, b) => a.concat(b));
    return flatten;
};
console.log(juanFlatten([[1, 2, 3], [4, 5], [6]]));
export {};
//# sourceMappingURL=e1.js.map