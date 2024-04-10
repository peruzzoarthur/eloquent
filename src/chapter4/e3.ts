console.log("e3");
type Liszt = {
  value: number;
  rest: Liszt | undefined;
} | null;

const arrayToList = (numArray: number[]): Liszt => {
  let list: Liszt = null;
  for (let i = numArray.length - 1; i >= 0; i--) {
    list = {
      value: numArray[i],
      rest: list,
    };
  }
  return list;
};

const listToArray = (list: Liszt | undefined): number[] => {
  let array: number[] = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
};

const prepend = (value: number, list: Liszt): Liszt => {
  return { value, rest: list };
};

const nth = (list: Liszt | undefined, n: number): number | undefined => {
  if (!list) {
    return undefined;
  } else if (n === 0) {
    return list.value;
  } else {
    return nth(list.rest, n - 1);
  }
};

console.log(arrayToList([10, 20]));

console.log(listToArray(arrayToList([10, 20, 30])));

console.log(prepend(10, prepend(20, null)));

console.log(nth(arrayToList([10, 20, 30]), 1));
