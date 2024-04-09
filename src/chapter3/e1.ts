console.log("minminmin");

const min = (num1: number, num2: number) => {
  if (num1 >= num2) {
    return num2;
  } else {
    return num1;
  }
};

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
