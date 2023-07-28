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

const eqObjects = function(object1, object2) {
  //if not a perfect match return false
  let keys = Object.keys(object1);
  if (!eqArrays(keys, Object.keys(object2))) {
    return false;
  }
  for (let key of keys) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✔️  Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else console.log(`❌ Assertion Failed: ${inspect(actual)}, !==  ${inspect(expected)}`);
};
