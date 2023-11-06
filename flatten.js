const eqArrays = require('./eqArrays');

const flatten = function(givenArray) {
  let flattenedArray = [];

  // Ignore given data if not an array 
  if (!Array.isArray(givenArray)) {
    console.log("Please give me an array");
    return;
  }

  // Loop through array and reduce nested arrays into 1 array
  for (let i = 0; i < givenArray.length; i++) {
    if (Array.isArray(givenArray[i])) {
      flattenedArray = flattenedArray.concat(flatten(givenArray[i]));
    } else {
      flattenedArray.push(givenArray[i]);
    }
  }
  console.log(flattenedArray);
  return flattenedArray;
};

// Example usage:
flatten([1, 2, [3, 4], 5, [6]]);





