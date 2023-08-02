const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

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

module.exports = middle;
