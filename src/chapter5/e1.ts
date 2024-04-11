const juanFlatten = (array: number[][]): number[] => {
  let flatten: number[] = [];

  flatten = array.reduce((a, b) => a.concat(b));
  return flatten;
};

console.log(juanFlatten([[1, 2, 3], [4, 5], [6]]));
