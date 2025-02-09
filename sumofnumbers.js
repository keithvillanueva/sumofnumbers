"use strict";
const sumFor = function (n) {
    let sum = 0;
    for (let i = 0; i < n.length; i++) {
        sum += n[i];
    }
    return sum;
};
const sumWhile = function (n) {
    let sum = 0;
    let i = 0;
    while (i < n.length) {
        sum += n[i];
        i++;
    }
    return sum;
};
const sumRecursive = function (n) {
    if (n.length === 0) {
        return 0;
    }
    return n[0] + sumRecursive(n.slice(1));
};
const sumTheFunctionalWay = function (n) {
    return n.reduce((acc, curr) => acc + curr, 0);
};
console.log(sumFor([1, 2, 3, 4]));
console.log(sumWhile([1, 2, 3, 4]));
console.log(sumRecursive([1, 2, 3, 4]));
console.log(sumTheFunctionalWay([1, 2, 3, 4]));
