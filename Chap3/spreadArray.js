var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var spreadArray;
(function (spreadArray) {
    var a = [1, 2, 3];
    var b = [4, 5, 6];
    var c = __spreadArray(__spreadArray([], a, true), b, true);
    var d = a.concat(b);
    console.log('c before ', c);
    console.log('d before', d);
    a.push(10);
    console.log('a', a);
    console.log('c after', c);
})(spreadArray || (spreadArray = {}));
