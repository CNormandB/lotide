const assertArraysEqual = require('./assertArraysEqual');

const middle = function(array) {
  // if array has one or 2 element(s) = []
  if (array.length < 2) {
    return [];
   
  } //if array has even # of elements = array with two middle elements
  else if (array.length % 2 === 0) {
    const middleNumber = (Math.floor(array.length / 2));
    return [array[middleNumber - 1], array[middleNumber]];
  } //if array has odd # of elements = array with single element
  else {
    const middleNumber = (Math.floor(array.length / 2));
    return [array[middleNumber]];
  }
};

module.exports = middle;