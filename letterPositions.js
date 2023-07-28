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

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    //put results into object
    results[sentence[i]] ? results[sentence[i]].push(i) : results[sentence[i]] = [i];
  }
  return results;
};

let sentence = 'hello';
console.log(letterPositions(sentence));
//{ h: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ] }
assertArraysEqual(letterPositions(sentence)['h'], [0]);
assertArraysEqual(letterPositions(sentence)['e'], [1]);
assertArraysEqual(letterPositions(sentence)['l'], [2, 3]);
assertArraysEqual(letterPositions(sentence)['o'], [4]);