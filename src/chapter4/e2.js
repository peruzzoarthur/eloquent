var reverseArray = function (array) {
    var newArray = [];
    for (var i = array.length - 1; i >= 0; i--) {
        newArray.push(array[i]);
    }
    return newArray;
};
var myArray = ["A", "B", "C"];
console.log(reverseArray(myArray));
var myNumbersArray = [1, 5, 99, 72, 666];
console.log(reverseArray(myNumbersArray));
// const reverseArrayInPlace = <T>(array: T[]): T[] => {
//   const l = array.length;
//   const middle = l / 2;
//   const isEven = l % 2 === 0;
//   for (let i = 0; i <= (isEven ? middle + 1 : middle + 2); i++) {
//     const popValue = array.pop();
//     if (popValue) {
//       array.unshift(popValue);
//     }
//   }
//   return array;
// };
var reverseArrayInPlace = function (array) {
    for (var i = 0; i < Math.floor(array.length / 2); i++) {
        var hold = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = hold;
    }
    return array;
};
console.log(reverseArrayInPlace(myNumbersArray));
console.log(Math.floor(5 / 2));
