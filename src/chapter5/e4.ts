// const scriptss: Scripts[] = require("./scripts.ts");
import { Script } from "./index.js";
import { SCRIPTS } from "./scripts.js";

type Scripts = {
  name: string;
  ranges: [number, number][];
  direction: "ltr" | "rtl" | "ttb";
  year: number;
  living: boolean;
  link: string;
};

const count_by = <T, U>(
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

const character_script = (code: number): Scripts | null => {
  for (let script of SCRIPTS) {
    if (
      script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })
    )
      return script as Script;
  }
  return null;
};

const dominantDirection = (text: string) => {
  let counted = count_by(text, (char: string) => {
    let script = character_script(char.codePointAt(0) as number);

    return script ? script.direction : "none";
  }).filter(({ name }) => name != "none");
  if (counted.length == 0) return "ltr";

  return counted.reduce((a, b) => (a.count > b.count ? a : b)).name;
};
console.log(dominantDirection("Hello!"));
console.log(dominantDirection("Hey, مساء الخير"));
