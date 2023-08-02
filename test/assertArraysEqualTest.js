const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([1, 3, 4], [1, 3, 4]);
assertArraysEqual([1,3,6], [1,3,'6']);
assertArraysEqual([1,3,6], []);
assertArraysEqual([], []);