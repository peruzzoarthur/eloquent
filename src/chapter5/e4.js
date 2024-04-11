var count_by = function (items, groupName) {
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
var character_script = function (code) {
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
// const dominantDirection
