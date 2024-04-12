console.log("Hello Eloquent People");
// let number: number = 0;
// while (number <= 6.66) {
//   console.log(number);
//   number++;
// }
// let result = 1;
// let counter = 0;
// while (counter < 10) {
//   result = result * 2;
//   counter++;
//   console.log(result);
// }
// console.log(`Final result : ${result}`);
// import readline from "readline";
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// function askName() {
//   rl.question("Who are you? ", (answer) => {
//     if (answer.trim() === "") {
//       console.log("Please enter your name.");
//       askName(); // Ask again if the input is empty
//     } else {
//       console.log("Hello " + answer.trim());
//       rl.close();
//     }
//   });
// }
// let result = 1;
// for (let c = 0; c < 10; c++) {
//   result = result * 2;
//   console.log(result);
// }
for (let current = 1;; current++) {
    if (current % 7 === 0) {
        console.log(current);
        break;
    }
    else {
        console.log(current);
    }
}
console.log("Bye bye eloquents 👋");
export {};
//# sourceMappingURL=index.js.map