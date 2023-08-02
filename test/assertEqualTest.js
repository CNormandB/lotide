const assert = require('chai').assert;
const assertEqual = require('../assertEqual');

describe("#assertEqual", () => {
  it("returns false when they aren't the same", () => {
    const expected = "Lighthouse Labs";
    const actual = "Bootcamp";
   assert.strictEqual(assertEqual(expected, actual));
  })

  it("returns true when they are the same", () => {
    const expected = 1;
    const actual = 1;
    assert.strictEqual(assertEqual(expected, actual));
   })
});