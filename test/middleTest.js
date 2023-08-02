const assert = require('chai').assert;
const eqArrays = require('../eqArrays');
const middle = require('../middle');

describe("#middle", () => {
  it("returns [] for array with 2 or less items", () => {
    assert.strictEqual(eqArrays(middle([1]), []), true);
  });

  it("returns the middle item of an odd length array", () => {
    assert.strictEqual(eqArrays(middle([1, 2, 3]), [2]), true);
    assert.strictEqual(eqArrays(middle([4, 5, 6]), [5]), true);
  })

  it("returns an empty array if given an empty array", () => {
    assert.strictEqual(eqArrays(middle([]), []), true);
  })

  it("returns the two middle items when the array is of even length", () => {
    assert.strictEqual(eqArrays(middle([1, 2, 3, 4]), [2, 3]), true);
  })
}); 