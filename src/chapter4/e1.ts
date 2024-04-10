const range = (
  start: number,
  end: number,
  step: number = start < end ? 1 : -1
) => {
  let numArray: number[] = [];

  if (step > 0) {
    for (let i = start; i <= end; i += step) {
      numArray.push(i);
    }
  } else {
    for (let i = start; i >= end; i += step) {
      numArray.push(i);
    }
  }
  return numArray;
};

const sum = (numArray: number[]) => {
  let s: number = 0;
  for (let value of numArray) {
    s += value;
  }
  return s;
};

console.log(range(1, 10));

console.log(range(5, 2, -1));

const test = range(88, 6, -1);

console.log(test);

console.log(sum(test));
