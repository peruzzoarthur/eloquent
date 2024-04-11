// console.log("high 5");

// const repeat = (n: number, action: (i: number) => void) => {
//   for (let i = 0; i < n; i++) {
//     action(i);
//   }
// };

// repeat(3, console.log);

// let labels: string[] = [];

// repeat(5, (i) => {
//   labels.push(`Unit ${i + 1}`);
// });

// console.log(labels);

// const greaterThan = (n: number): ((m: number) => boolean) => {
//   return (m) => m > n;
// };

// const greaterThanTen = greaterThan(10);

// console.log(greaterThanTen(9));

// const noisy = (f: any) => {
//   return (...args: any[]) => {
//     console.log("calling with", args);
//     let result = f(...args);
//     console.log("called with", args, ", returned", result);
//     return result;
//   };
// };

// noisy(Math.min)(3, 2, 1);

// const unless = (test: boolean, then: () => void) => {
//   if (test) then();
// };

// repeat(3, (n) => {
//   unless(n % 2 === 0, () => console.log(n, "isEven"));
// });

// ["A", "B"].forEach((l) => console.log(l));

// ????????????????????????????????????????????

type Script = {
  name: string;
  ranges: [number, number][];
  direction: "ltr" | "rtl" | "ttb";
  year: number;
  living: boolean;
  link: string;
};

const scripts: Script[] = require("./scripts.ts");

console.log(scripts[0].ranges[2]);

const filter = <T>(array: T[], test: (element: T) => boolean): T[] => {
  let passed: T[] = [];
  for (let element of array) {
    if (test(element)) {
      passed.push(element);
    }
  }
  return passed;
};

console.log(filter(scripts, (script) => script.living));

console.log(scripts.filter((s) => s.direction === "ttb"));
