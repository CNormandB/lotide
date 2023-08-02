const assertEqual = require('./assertEqual');

 //Create a function 'head' which returns the first item in the array.
 const head = function(array){
  if (array.length > 0){
    return array[0];
  } else {
    return undefined
  }
 }

module.exports = head;