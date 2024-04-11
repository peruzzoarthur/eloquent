// console.log("high 5");
var scripts = require("./scripts.ts");
// console.log(scripts[0].ranges[2]);
var filter = function (array, test) {
    var passed = [];
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var element = array_1[_i];
        if (test(element)) {
            passed.push(element);
        }
    }
    return passed;
};
// console.log(filter(scripts, (script) => script.living));
// console.log(scripts.filter((s) => s.direction === "ttb"));
var map = function (array, transform) {
    var mapped = [];
    for (var _i = 0, array_2 = array; _i < array_2.length; _i++) {
        var element = array_2[_i];
        mapped.push(transform(element));
    }
    return mapped;
};
var rtlScripts = scripts.filter(function (s) { return s.direction === "rtl"; });
// console.log(map(rtlScripts, (s) => ({ name: s.name, living: s.living })));
var reduce = function (array, combine, start) {
    if (start === void 0) { start = array[0]; }
    var current = start;
    for (var _i = 0, array_3 = array; _i < array_3.length; _i++) {
        var element = array_3[_i];
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
var characterCount = function (s) {
    return s.ranges.reduce(function (count, _a) {
        var from = _a[0], to = _a[1];
        return count + (to - from);
    }, 0);
};
var biggestScript = scripts.reduce(function (a, b) {
    return characterCount(a) > characterCount(b) ? a : b;
});
// console.log(biggestScript);
var average = function (array) {
    return array.reduce(function (a, b) { return a + b; }) / array.length;
};
// console.log(
//   Math.round(average(scripts.filter((s) => s.living).map((s) => s.year)))
// );
// console.log(
//   Math.round(average(scripts.filter((s) => !s.living).map((s) => s.year)))
// );
var characterScript = function (code) {
    for (var _i = 0, scripts_1 = scripts; _i < scripts_1.length; _i++) {
        var script = scripts_1[_i];
        if (script.ranges.some(function (_a) {
            var from = _a[0], to = _a[1];
            return code >= from && code < to;
        }))
            return script;
    }
    return null;
};
// console.log(characterScript(121));
var horshoe = "🐴👟";
// console.log(horshoe.length);
// console.log(horshoe[0]);
// console.log(horshoe.charCodeAt(0));
// console.log(horshoe.codePointAt(0));
// console.log(characterScript(128052));
// let roseDragon = "🌹🐉";
// for (let char of roseDragon) {
//   console.log(char);
// }
var countBy = function (items, groupName) {
    var counts = [];
    var _loop_1 = function (item) {
        var name_1 = groupName(item);
        var known = counts.find(function (c) { return c.name === name_1; });
        if (!known) {
            counts.push({ name: name_1, count: 1 });
        }
        else {
            known.count++;
        }
    };
    for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
        var item = items_1[_i];
        _loop_1(item);
    }
    return counts;
};
console.log(countBy([1, 2, 3, 4, 5], function (n) { return typeof n === "number" && n > 2; }));
console.log(countBy([1, 2, 3, 4, 5], function (n) { return typeof n === "number" && n > 2; }));
console.log(countBy([1, 2, 3, 4, 5, 6, 6, 6, 2, 2, 1], function (n) { return n; }));
var textScripts = function (text) {
    var scripts = countBy(text, function (char) {
        var codePoint = char.codePointAt(0);
        if (codePoint === undefined)
            return "none";
        var script = characterScript(codePoint);
        return script ? script.name : "none";
    }).filter(function (_a) {
        var name = _a.name;
        return name != "none";
    });
    var total = scripts.reduce(function (n, _a) {
        var count = _a.count;
        return n + count;
    }, 0);
    if (total == 0)
        return "No scripts found";
    return scripts
        .map(function (_a) {
        var name = _a.name, count = _a.count;
        return "".concat(Math.round((count * 100) / total), "% ").concat(name);
    })
        .join(", ");
};
console.log(textScripts('英国的狗说"woof", 俄罗斯的狗说"тяв"'));
module.exports = countBy;
