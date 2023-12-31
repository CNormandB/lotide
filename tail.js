const assertEqual = require('./assertEqual');

//Create a function 'tail' which returns the "tail" of an array: everything except for the first item (head) of the provided array.
const tail = function(array) {
  if (array.length > 1) {
    //copies index 1 and everything after and returns it
    return array.slice(1, array.length);
  } else {
    return [];
  }
};

module.exports = tail;