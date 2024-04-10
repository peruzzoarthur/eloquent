var range = function (start, end, step) {
    if (step === void 0) { step = start < end ? 1 : -1; }
    var numArray = [];
    if (step > 0) {
        for (var i = start; i <= end; i += step) {
            numArray.push(i);
        }
    }
    else {
        for (var i = start; i >= end; i += step) {
            numArray.push(i);
        }
    }
    return numArray;
};
var sum = function (numArray) {
    var s = 0;
    for (var _i = 0, numArray_1 = numArray; _i < numArray_1.length; _i++) {
        var value = numArray_1[_i];
        s += value;
    }
    return s;
};
console.log(range(1, 10));
console.log(range(5, 2, -1));
var test = range(88, 6, -1);
console.log(test);
console.log(sum(test));
