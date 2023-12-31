//compares source and itemsToRemove arrays
//removes the itemsToRemove from source
const without = function(source, itemsToRemove) {
  let result = source.slice();
  for (let itemToRemove of itemsToRemove) {
    let index = result.indexOf(itemToRemove);
    //so long as the itemToRemove we're observing exists in the result array we remove the item and look for any repeating instances of itemToRemove
    while (index > -1) {
      result.splice(index, 1);
      index = result.indexOf(itemToRemove);
    }
  }
  return result;
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✔️  Assertion Passed: ${actual} === ${expected}`);
  } else console.log(`❌ Assertion Failed: ${actual}, !==  ${expected}`);
};



console.log(without([1, 2, 3], [1, 2]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));
console.log(without([1, 2, 3], [1, 2, 3]));
console.log(without([], [1, 2]));
console.log(without([1, 2, 3], []));

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);