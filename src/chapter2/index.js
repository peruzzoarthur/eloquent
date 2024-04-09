import { createInterface } from "readline";
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
const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
});
async function askName() {
    rl.question("Who are you? ", (answer) => {
        if (answer.trim() === "") {
            console.log("Please enter your name.");
            askName(); // Ask again if the input is empty
        }
        else {
            console.log("Hello " + answer.trim());
            rl.close();
        }
    });
}
await askName();
await console.log("Bye bye eloquents 👋");
