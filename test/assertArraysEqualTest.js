const assert = require('chai').assert;
const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');

describe("#assertArraysEqual", () => {
  it("returns [1, 2, 3] for [1, 2, 3]", () => {
    assert.strictEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]));
  });

  it("returns failed [1, 3, 6] for [1, 3, '6']", () => {
    assert.strictEqual(assertArraysEqual([1, 3, 6], [1, 3, '6'], 'Arrays not the same'));
  });

  it("returns failed for [1, 3, 6]", () => {
    assert.strictEqual(assertArraysEqual([1, 3, 6], [], 'Arrays not the same'));
  });

  it("returns [] for []", () => {
    assert.strictEqual(assertArraysEqual([], []));
  });

});