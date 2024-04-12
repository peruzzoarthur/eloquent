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
export const scripts = require("./scripts.ts");
// console.log(scripts[0].ranges[2]);
const filter = (array, test)=>{
    let passed = [];
    for (let element of array){
        if (test(element)) {
            passed.push(element);
        }
    }
    return passed;
};
// console.log(filter(scripts, (script) => script.living));
// console.log(scripts.filter((s) => s.direction === "ttb"));
const map = (array, transform)=>{
    let mapped = [];
    for (let element of array){
        mapped.push(transform(element));
    }
    return mapped;
};
let rtlScripts = scripts.filter((s)=>s.direction === "rtl");
// console.log(map(rtlScripts, (s) => ({ name: s.name, living: s.living })));
const reduce = (array, combine, start = array[0])=>{
    let current = start;
    for (let element of array){
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
const characterCount = (s)=>{
    return s.ranges.reduce((count, [from, to])=>{
        return count + (to - from);
    }, 0);
};
const biggestScript = scripts.reduce((a, b)=>{
    return characterCount(a) > characterCount(b) ? a : b;
});
// console.log(biggestScript);
const average = (array)=>{
    return array.reduce((a, b)=>a + b) / array.length;
};
// console.log(
//   Math.round(average(scripts.filter((s) => s.living).map((s) => s.year)))
// );
// console.log(
//   Math.round(average(scripts.filter((s) => !s.living).map((s) => s.year)))
// );
const characterScript = (code)=>{
    for (let script of scripts){
        if (script.ranges.some(([from, to])=>{
            return code >= from && code < to;
        })) return script;
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
const countBy = (items, groupName)=>{
    let counts = [];
    for (let item of items){
        let name = groupName(item);
        let known = counts.find((c)=>c.name === name);
        if (!known) {
            counts.push({
                name,
                count: 1
            });
        } else {
            known.count++;
        }
    }
    return counts;
};
console.log(countBy([
    1,
    2,
    3,
    4,
    5
], (n)=>typeof n === "number" && n > 2));
console.log(countBy([
    1,
    2,
    3,
    4,
    5
], (n)=>typeof n === "number" && n > 2));
console.log(countBy([
    1,
    2,
    3,
    4,
    5,
    6,
    6,
    6,
    2,
    2,
    1
], (n)=>n));
const textScripts = (text)=>{
    let scripts = countBy(text, (char)=>{
        let codePoint = char.codePointAt(0);
        if (codePoint === undefined) return "none";
        let script = characterScript(codePoint);
        return script ? script.name : "none";
    }).filter(({ name })=>name != "none");
    let total = scripts.reduce((n, { count })=>n + count, 0);
    if (total == 0) return "No scripts found";
    return scripts.map(({ name, count })=>{
        return `${Math.round(count * 100 / total)}% ${name}`;
    }).join(", ");
};
console.log(textScripts('英国的狗说"woof", 俄罗斯的狗说"тяв"'));
