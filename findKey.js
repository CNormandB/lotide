const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️  Assertion Passed: ${actual} === ${expected}`);
  } else console.log(`❌ Assertion Failed: ${actual}, !==  ${expected}`);
};

const findKey = function(object, callback) {
  let keyFound = '';
  //It should scan the object
  for (let key of Object.keys(object)) {
    //If no key is found, then it should return undefined.
    if (callback(object[key])) {
      //return the first key for which the callback returns a truthy value.
      keyFound = key;
      return keyFound;
    }
  }
  return undefined;
};

//test code
let results = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2);

let results2 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 4);

let results3 = findKey({}, (x => x.stars === 4));

assertEqual(results, 'noma');
assertEqual(results2, undefined);
assertEqual(results3, undefined);
