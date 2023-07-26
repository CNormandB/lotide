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

const middle = function(array) {
  // if array has one or 2 element(s) = []
  if (array.length < 2) {
    return [];
    //if array has odd # of elements = array with single element
  } else if (array.length % 2 === 0) {
    const middleNumber = (Math.floor(array.length / 2));
    return middleNumber;
  //if array has even # of elements = array with two middle elements
  } else {
    const middleNumber = (Math.floor(array.length / 2));
    return [middleNumber, middleNumber + 1];
  }
};

//test code
console.log(middle([1]));
console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4]));
console.log(middle([]));
assertArraysEqual([1, 3, 4], [1, 3, 4]);
assertArraysEqual([1,3,6], [1,3,'6']);