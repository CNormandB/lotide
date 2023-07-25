//add assertEqual function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️  Assertion Passed: ${actual} === ${expected}`);
  } else console.log(`❌ Assertion Failed: ${actual} !==  ${expected}`);
};

//Create a function 'tail' which returns the "tail" of an array: everything except for the first item (head) of the provided array.
const tail = function(array) {
  if (array.length > 1) {
    return array.slice(1, array.length);
  } else {
    return [];
  }
};

//test
const original = ["Hello", "Lighthouse", "Labs"];
let actual = ["Hello", "Lighthouse", "Labs"];
const result = tail(actual);
console.log('Slice Result: ' + result);

assertEqual(actual.length, original.length);
for (let i = 0; i < original.length; i++) {
  assertEqual(original[i], actual[i]);
}


