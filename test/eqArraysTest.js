const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe("#eqArrays", () => {
  it("returns true if arrays are equal", () => {
    const actual = [1, 2, 3];
    const expected = [1, 2, 3]
    assert.isTrue(eqArrays(actual, expected));
  })

  it("returns false if the arrays are different", () => {
    const actual = [1, 2, 3];
    const expected = [1, 2, '3'];
    assert.isFalse(eqArrays(actual, expected));
  })

  it("returns true if the arrays are the same", () => {
    assert.isTrue(eqArrays([], []));
  })
})


//assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
//assertEqual(eqArrays([1, 2, 3], [1, 2, '3']), true);
//assertEqual(eqArrays([1, 2, 3], [1, 2, '3']), false);