// permutations = 순열, 순서가 중요함
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
/* javascript */
function permutation(arr, num) {
    var res = [];
    if (num === 1)
        return arr.map(function (v) { return [v]; });
    arr.forEach(function (v, idx, arr) {
        var rest = arr.slice(idx + 1);
        var permutations = permutation(rest, num - 1);
        var attach = permutations.map(function (permutation) { return __spreadArray([v], permutation, true); });
        res.push.apply(res, attach);
    });
    return res;
}
/* typescript */
function permutationWithType(arr, num) {
    var res = [];
    if (num === 1)
        return arr.map(function (v) { return [v]; });
    arr.forEach(function (v, idx, arr) {
        var rest = __spreadArray(__spreadArray([], arr.slice(0, idx), true), arr.slice(idx + 1), true);
        var permutations = permutation(rest, num - 1);
        var attach = permutations.map(function (permutation) { return __spreadArray([v], permutation, true); });
        res.push.apply(res, attach);
    });
    return res;
}
console.log(permutation([1, 2, 3], 2));
console.log(permutationWithType([1, 2, 3], 2));
