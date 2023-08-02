const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

console.log(middle([1]));
console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4]));
console.log(middle([]));
assertArraysEqual([1, 3, 4], [1, 3, 4]);
assertArraysEqual([1,3,6], [1,3,'6']);