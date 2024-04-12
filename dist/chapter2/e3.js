// const size = 8;
// for (let row = 1; row <= size; row++) {
//   if (row % 2 !== 0) {
//     console.log(" # # # #");
//   }
//   if (row % 2 === 0) {
//     console.log("# # # # ");
//   }
//   //     for (let column = 1; column <= size; column++) {
//   //   }
// }
const size = 8;
let board = "";
for (let row = 0; row < size; row++) {
    for (let column = 0; column < size; column++) {
        if ((row + column) % 2 === 0) {
            board += " ";
        }
        else {
            board += "#";
        }
    }
    board += "\n";
}
console.log(board);
export {};
//# sourceMappingURL=e3.js.map