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

export type Script = {
  name: string;
  ranges: [number, number][];
  direction: "ltr" | "rtl" | "ttb";
  year: number;
  living: boolean;
  link: string;
};

export const scripts: Script[] = require("./scripts.ts");

// console.log(scripts[0].ranges[2]);

const filter = <T>(array: T[], test: (element: T) => boolean): T[] => {
  let passed: T[] = [];
  for (let element of array) {
    if (test(element)) {
      passed.push(element);
    }
  }
  return passed;
};

// console.log(filter(scripts, (script) => script.living));

// console.log(scripts.filter((s) => s.direction === "ttb"));

const map = <T, U>(array: T[], transform: (element: T) => U): U[] => {
  let mapped: U[] = [];
  for (let element of array) {
    mapped.push(transform(element));
  }
  return mapped;
};

let rtlScripts = scripts.filter((s) => s.direction === "rtl");

// console.log(map(rtlScripts, (s) => ({ name: s.name, living: s.living })));

const reduce = <T>(
  array: T[],
  combine: (current: T, element: T) => T,
  start: T = array[0]
) => {
  let current: T = start;
  for (let element of array) {
    current = combine(current, element);
  }
  return current;
};

// console.log(reduce([1, 2, 3, 4], (a: number, b: number) => a + b, 0));

// console.log(
//   reduce(["aa", "bbb", "ccccc", "lololol"], (a, b) => {
//     if (a.length <= b.length) {
//       return b;
//     }
//     return a;
//   })
// );

const characterCount = (s: Script): number => {
  return s.ranges.reduce((count, [from, to]) => {
    return count + (to - from);
  }, 0);
};

const biggestScript = scripts.reduce((a, b) => {
  return characterCount(a) > characterCount(b) ? a : b;
});

// console.log(biggestScript);

const average = (array: number[]): number => {
  return array.reduce((a: number, b: number) => a + b) / array.length;
};

// console.log(
//   Math.round(average(scripts.filter((s) => s.living).map((s) => s.year)))
// );

// console.log(
//   Math.round(average(scripts.filter((s) => !s.living).map((s) => s.year)))
// );

const characterScript = (code: number): Script | null => {
  for (let script of scripts) {
    if (
      script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })
    )
      return script;
  }
  return null;
};

// console.log(characterScript(121));

let horshoe = "🐴👟";

// console.log(horshoe.length);

// console.log(horshoe[0]);

// console.log(horshoe.charCodeAt(0));

// console.log(horshoe.codePointAt(0));

// console.log(characterScript(128052));

// let roseDragon = "🌹🐉";

// for (let char of roseDragon) {
//   console.log(char);
// }

const countBy = <T, U>(
  items: T[] | string,
  groupName: (item: T | string) => U | string
) => {
  let counts: { name: U | string; count: number }[] = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.find((c) => c.name === name);

    if (!known) {
      counts.push({ name, count: 1 });
    } else {
      known.count++;
    }
  }
  return counts;
};

console.log(
  countBy<number, boolean>(
    [1, 2, 3, 4, 5],
    (n: number | string): boolean => typeof n === "number" && n > 2
  )
);

console.log(
  countBy<number, boolean>(
    [1, 2, 3, 4, 5],
    (n: number | string) => typeof n === "number" && n > 2
  )
);

console.log(countBy([1, 2, 3, 4, 5, 6, 6, 6, 2, 2, 1], (n) => n));

const textScripts = (text: string): string => {
  let scripts = countBy<string, string>(text, (char) => {
    let codePoint = char.codePointAt(0);
    if (codePoint === undefined) return "none";
    let script = characterScript(codePoint);
    return script ? script.name : "none";
  }).filter(({ name }) => name != "none");

  let total = scripts.reduce((n, { count }) => n + count, 0);
  if (total == 0) return "No scripts found";

  return scripts
    .map(({ name, count }) => {
      return `${Math.round((count * 100) / total)}% ${name}`;
    })
    .join(", ");
};

console.log(textScripts('英国的狗说"woof", 俄罗斯的狗说"тяв"'));
