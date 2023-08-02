const assertEqual = require('../assertEqual');
const tail = require('../tail')


const original = ["Hello", "Lighthouse", "Labs"];
let actual = ["Hello", "Lighthouse", "Labs"];
const result = tail(actual);
console.log('Slice Result: ' + result);

assertEqual(actual.length, original.length);
for (let i = 0; i < original.length; i++) {
  assertEqual(original[i], actual[i]);
}


