// const rountTo = (n: number, step: number) => {
//   let remainder = n % step;
//   return n - remainder + (remainder < step / 2 ? 0 : step);
// };
// console.log(rountTo(23, 10));
// const functionX = () => {
//   let x = 10;
//   if (true) {
//     var y = 20 * x;
//     console.log(y);
//   }
//   console.log(y + 100);
// };
// functionX();
// const halve = (n: number): number => {
//   return n / 2;
// };
// let n = 10;
// console.log(halve(100));
// console.log(n * 2)
// const multiplier = (factor: number) => {
//   return (number: number) => number * factor;
// };
// const tuaice = multiplier(2);
// console.log(tuaice(2 + 1) + 3);
// const power = (base: number, exponent: number): number => {
//   if (exponent === 0) {
//     return 1;
//   } else {
//     return base * power(base, exponent - 1);
//   }
// };
// console.log(power(2, 12));
// function findSolution(target: number) {
//   function find(current: number, history: string): string | undefined {
//     if (current == target) {
//       return history;
//     } else if (current > target) {
//       return undefined;
//     } else {
//       return (
//         find(current + 5, `(${history} + 5)`) ??
//         find(current * 3, `(${history} * 3)`)
//       );
//     }
//   }
//   return find(1, "1");
// }
// console.log(findSolution(24));
// const printFarmInventory = (cows: number, chickens: number): void => {
//   let cowString = String(cows);
//   while (cowString.length < 3) {
//     cowString = "0" + cowString;
//   }
//   console.log(`${cowString} Cows`);
//   let chickenString = String(chickens);
//   while (chickenString.length < 3) {
//     chickenString = "0" + chickenString;
//   }
//   console.log(`${chickenString} Chickens`);
// };
// printFarmInventory(70, 6);
// const printZeroPaddedWithLabel = (number: number, label: string) => {
//   let numberString = String(number);
//   while (numberString.length < 3) {
//     numberString = "0" + numberString;
//   }
//   console.log(`${numberString} ${label}`);
// };
// const printFarmInventory = (cows: number, chickens: number, pigs: number) => {
//   printZeroPaddedWithLabel(cows, "Cows"),
//     printZeroPaddedWithLabel(chickens, "Chickens"),
//     printZeroPaddedWithLabel(pigs, "Pigs");
// };
// printFarmInventory(3, 55, 6622);
const zeroPad = (number, width) => {
    let string = String(number);
    while (string.length < width) {
        string = "0" + string;
    }
    return string;
};
const printFarmInventory = (cows, chickens, pigs) => {
    console.log(`${zeroPad(cows, 3)} Cows`);
    console.log(`${zeroPad(chickens, 3)} Chickens`);
    console.log(`${zeroPad(pigs, 3)} Pigs`);
};
printFarmInventory(13, 6, 66);
export {};
//# sourceMappingURL=index.js.map