var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// combination: 조합, 순서를 따지지 않음
function combination(arr, num) {
    var res = [];
    if (num === 1)
        return arr.map(function (v) { return [v]; });
    arr.forEach(function (v, idx, arr) {
        var rest = arr.slice(idx + 1);
        console.log(rest);
        var combinations = combination(rest, num - 1);
        var attach = combinations.map(function (combination) { return __spreadArray([v], combination, true); });
        res.push.apply(res, attach);
    });
    return res;
}
function combinationWithType(arr, num) {
    var res = [];
    if (num === 1)
        return arr.map(function (v) { return [v]; });
    arr.forEach(function (v, idx, arr) {
        var rest = arr.slice(idx + 1);
        var combinations = combination(rest, num - 1);
        var attach = combinations.map(function (combination) { return __spreadArray([v], combination, true); });
        res.push.apply(res, attach);
    });
    return res;
}
console.log(combination([1, 2, 3], 2));
console.log(combinationWithType([1, 2, 3], 2));
