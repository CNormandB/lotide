const assert = require('chai').assert;
const assertEqual = require('../assertEqual');
const tail = require('../tail')

const expected = ["Lighthouse", "Labs"];
let actual = ["Hello", "Lighthouse", "Labs"];

describe("#tail", () => {
  it("returns passed if length is the same", () => {
    assert.strictEqual(tail(actual).length, expected.length);
  })

  it("returns passed if all items are the same", () => {
    for (let i = 0; i < expected.length; i++) {
      assert.strictEqual(tail(actual)[i], expected[i]);
    }
  })
})

